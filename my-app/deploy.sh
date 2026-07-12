#!/bin/bash

# 节日祝福自动回复助手 - 部署脚本

echo "🎊 节日祝福自动回复助手 - 部署开始"

# 检查必要文件
echo "📋 检查必要文件..."
required_files=("index.html" "app.js" "manifest.json" "sw.js")
for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ 缺少文件: $file"
        exit 1
    fi
done
echo "✅ 所有必要文件检查完成"

# 创建图标（如果不存在）
echo "🎨 创建应用图标..."
if [ ! -d "icons" ]; then
    mkdir -p icons
fi

# 生成不同尺寸的图标（使用placeholder）
# 在实际部署时，需要替换为真实的PNG图标文件
icon_sizes=(72 96 128 144 152 192 384 512)
for size in "${icon_sizes[@]}"; do
    if [ ! -f "icons/icon-${size}x${size}.png" ]; then
        echo "⚠️  图标文件 icons/icon-${size}x${size}.png 不存在，请手动添加"
    fi
done

# 创建部署包
echo "📦 创建部署包..."
deploy_dir="festival-greetings-deploy"
if [ -d "$deploy_dir" ]; then
    rm -rf "$deploy_dir"
fi
mkdir -p "$deploy_dir"

# 复制所有必要文件
cp index.html app.js manifest.json sw.js "$deploy_dir/"
cp -r icons "$deploy_dir/" 2>/dev/null || echo "⚠️  icons目录不存在，跳过"

# 创建部署说明
cat > "$deploy_dir/README.md" << 'EOF'
# 节日祝福自动回复助手 - PWA版本

## 📱 安装到手机

### 方法一：直接访问安装
1. 用手机浏览器访问应用地址
2. 等待页面加载完成
3. 点击浏览器菜单中的"添加到主屏幕"或"安装应用"
4. 确认安装，应用图标将出现在手机桌面

### 方法二：扫码安装
1. 用其他设备访问应用地址
2. 将二维码显示在屏幕上
3. 用手机扫描二维码
4. 按照方法一的步骤安装

## 🌟 功能特点

- **84个精选模板**：涵盖传统节日、现代节日、西方节日
- **智能分类**：按节日和体裁分类浏览
- **自动提醒**：节日自动推送通知
- **联系人管理**：管理需要祝福的联系人
- **离线使用**：支持离线缓存，无网络也能使用
- **响应式设计**：完美适配手机、平板、桌面

## 📋 系统要求

- **iOS**：iOS 11.4+ (Safari浏览器)
- **Android**：Android 6.0+ (Chrome浏览器推荐)
- **其他**：支持PWA的现代浏览器

## 🔧 技术特性

- **PWA技术**：渐进式Web应用
- **Service Worker**：离线缓存和后台同步
- **响应式设计**：适配所有设备尺寸
- **本地存储**：数据保存在设备本地
- **推送通知**：节日提醒功能

## 📞 使用支持

如有问题，请联系开发者或查看在线帮助文档。
EOF

echo "✅ 部署包创建完成: $deploy_dir/"

# 提供部署建议
echo ""
echo "🚀 部署建议："
echo "1. 将 $deploy_dir/ 目录下的所有文件上传到静态托管服务"
echo "2. 推荐的托管服务："
echo "   - GitHub Pages (免费)"
echo "   - Netlify (免费)"
echo "   - Vercel (免费)"
echo "   - Firebase Hosting (免费额度)"
echo "   - 自己的服务器 (Nginx/Apache)"
echo ""
echo "3. 上传后，用手机浏览器访问你的域名即可安装"
echo ""
echo "🎉 部署完成！"
