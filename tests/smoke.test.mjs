import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const APP_DIR = path.join(ROOT, "my-app");

function createDomStub() {
  const elements = new Map();
  const makeEl = (id = "") => ({
    id,
    innerHTML: "",
    textContent: "",
    value: "",
    style: {},
    className: "",
    classList: { add() {}, remove() {}, toggle() {}, contains: () => false },
    setAttribute() {},
    getAttribute: () => "selectTemplate(1)",
    appendChild() {},
    remove() {},
    scrollIntoView() {},
    addEventListener() {},
    querySelector: () => null,
    querySelectorAll: () => [],
  });
  return {
    elements,
    document: {
      getElementById(id) {
        if (!elements.has(id)) elements.set(id, makeEl(id));
        return elements.get(id);
      },
      querySelector: () => makeEl(),
      querySelectorAll: () => [],
      createElement: (tag) => makeEl(tag),
      addEventListener() {},
      body: makeEl("body"),
    },
  };
}

function loadAppContext() {
  const { elements, document } = createDomStub();
  const alerts = [];
  const storage = new Map();
  const code = fs.readFileSync(path.join(APP_DIR, "app.js"), "utf8");

  const sandbox = {
    console: { log() {}, warn() {}, error() {} },
    document,
    window: {
      addEventListener() {},
      location: { href: "http://localhost:3000/" },
    },
    navigator: { clipboard: { writeText: async () => {} } },
    localStorage: {
      getItem: (k) => (storage.has(k) ? storage.get(k) : null),
      setItem: (k, v) => storage.set(k, String(v)),
      removeItem: (k) => storage.delete(k),
    },
    alert: (msg) => alerts.push(msg),
    confirm: () => true,
    setTimeout: () => 1,
    clearTimeout() {},
    setInterval: () => 1,
    clearInterval() {},
    Date,
    Math,
    JSON,
    parseInt,
    parseFloat,
  };
  sandbox.window.document = document;
  sandbox.window.localStorage = sandbox.localStorage;

  vm.createContext(sandbox);
  vm.runInContext(
    `${code}\n;globalThis.__exports = { templates, festivals, getCategoryName, filterTemplates, selectTemplate, addContact, getContacts: () => contacts, getCurrentCategory: () => currentCategory, getCurrentTemplate: () => currentTemplate };`,
    sandbox
  );
  return { exports: sandbox.__exports, elements, alerts };
}

test("HTML, PWA manifest, and static server assets exist and are valid", () => {
  const html = fs.readFileSync(path.join(APP_DIR, "index.html"), "utf8");
  assert.match(html, /节日祝福自动回复助手/);
  for (const id of ["templatesGrid", "previewMessage", "festivalCalendar", "contactsList", "todayReplies"]) {
    assert.ok(html.includes(id), `index.html should contain #${id}`);
  }

  const manifest = JSON.parse(fs.readFileSync(path.join(APP_DIR, "manifest.json"), "utf8"));
  assert.ok(manifest.name && manifest.icons?.length > 0, "PWA manifest should define name and icons");

  const serverSrc = fs.readFileSync(path.join(APP_DIR, "server.js"), "utf8");
  assert.match(serverSrc, /http\.createServer/);
  assert.match(serverSrc, /Service-Worker-Allowed/);
});

test("template catalog, category mapping, selection, and filtering work", () => {
  const { exports: app, elements } = loadAppContext();
  assert.ok(Array.isArray(app.templates) && app.templates.length >= 8);
  assert.ok(Array.isArray(app.festivals) && app.festivals.length >= 8);

  assert.equal(app.getCategoryName("spring"), "春节");
  assert.equal(app.getCategoryName("midautumn"), "中秋");
  assert.equal(app.getCategoryName("birthday"), "生日");
  assert.equal(app.getCategoryName("unknown_cat"), "其他");

  app.filterTemplates("spring");
  assert.equal(app.getCurrentCategory(), "spring");
  assert.match(elements.get("templatesGrid").innerHTML, /春节祝福/);
  assert.doesNotMatch(elements.get("templatesGrid").innerHTML, /圣诞快乐/);

  app.selectTemplate(5);
  assert.equal(app.getCurrentTemplate().category, "midautumn");
  assert.match(elements.get("previewMessage").textContent, /中秋快乐/);
});

test("contact management validates mainland mobile numbers before adding", () => {
  const { exports: app, elements, alerts } = loadAppContext();
  const initialCount = app.getContacts().length;

  elements.set("contactName", { value: "王五" });
  elements.set("contactPhone", { value: "12345" });
  app.addContact();
  assert.equal(app.getContacts().length, initialCount);
  assert.ok(alerts.some((m) => m.includes("正确的手机号码")));

  elements.get("contactName").value = "王五";
  elements.get("contactPhone").value = "13712345678";
  app.addContact();
  assert.equal(app.getContacts().length, initialCount + 1);
  assert.equal(app.getContacts().at(-1).name, "王五");
});
