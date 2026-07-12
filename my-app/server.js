const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// MIME类型映射
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './index.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end('Server Error: ' + error.code, 'utf-8');
      }
    } else {
      res.writeHead(200, { 
        'Content-Type': mimeType,
        'Service-Worker-Allowed': '/',
        'Cache-Control': 'no-cache'
      });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`🎊 节日祝福自动回复助手`);
  console.log(`📱 PWA测试服务器已启动`);
  console.log(`🌐 本地访问地址: http://localhost:${PORT}`);
  console.log(`📲 手机访问地址: http://你的IP地址:${PORT}`);
  console.log(``);
  console.log(`🔧 使用说明:`);
  console.log(`1. 确保手机和电脑在同一WiFi网络`);
  console.log(`2. 在手机浏览器中访问上述地址`);
  console.log(`3. 点击"安装应用"按钮或浏览器菜单中的"添加到主屏幕"`);
  console.log(`4. 应用将安装到手机桌面，可离线使用`);
  console.log(``);
  console.log(`⚠️  注意: 这是测试环境，生产环境请使用专业的静态托管服务`);
});
