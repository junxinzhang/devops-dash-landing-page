# DevOps Dashboard - 落地页

> 企业级 DevOps 仪表盘产品官方落地页，展示产品核心功能与技术架构。

![页面预览](assets/screenshot.png)

## 📋 项目简介

这是 DevOps Dashboard 的官方静态网站落地页，用于展示产品功能、技术架构和快速入门指南。

### 核心特性

- 🎨 现代化响应式设计
- 🚀 轻量级静态网站（无需后端）
- 🌍 中英文双语支持
- 📱 完美支持移动端
- ♿ 符合无障碍访问标准
- 🔍 SEO 友好（Schema.org 结构化数据）
- 🎬 图片轮播展示
- 📊 滚动动画效果（AOS）
- 📲 PWA 支持

## 🛠️ 技术栈

- **前端框架**: 纯 HTML5 + CSS3 + JavaScript
- **CSS 框架**: Tailwind CSS (CDN)
- **图标库**: Remix Icon
- **动画库**: AOS (Animate On Scroll)
- **部署**: GitHub Pages

## 📁 项目结构

```
devops-dash-landing-page/
├── index.html              # 中文主页
├── en/
│   └── index.html          # 英文主页
├── css/
│   └── style.css           # 全局样式
├── js/
│   └── main.js             # 交互脚本
├── assets/                 # 资源文件
│   ├── favicon.png         # 网站图标
│   ├── icon.png            # PWA 图标
│   ├── logo.png            # Logo
│   ├── screenshot.png      # 截图1
│   └── screenshot01.png    # 截图2
├── manifest.json           # PWA 配置
├── robots.txt              # 爬虫配置
├── sitemap.xml             # 站点地图
└── README.md               # 项目说明
```

## 🚀 快速开始

### 本地预览

1. 克隆项目
```bash
git clone https://github.com/junxinzhang/devops-dash-landing-page.git
cd devops-dash-landing-page
```

2. 启动本地服务器（任选其一）

**使用 Python**:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**使用 Node.js**:
```bash
npx http-server -p 8000
```

**使用 PHP**:
```bash
php -S localhost:8000
```

3. 在浏览器打开 `http://localhost:8000`

### 部署到 GitHub Pages

#### 方法一：通过仓库设置启用（推荐）

1. 推送代码到 GitHub 仓库
```bash
git add .
git commit -m "Update: Landing page content"
git push origin main
```

2. 在 GitHub 仓库中：
   - 进入 **Settings** → **Pages**
   - **Source** 选择 `GitHub Actions`
   - Workflows 会自动触发部署

3. 部署完成后，访问：
   ```
   https://YOUR_USERNAME.github.io/devops-dash-landing-page/
   ```

#### 方法二：手动触发 Workflow

在 GitHub 仓库的 **Actions** 标签页，选择对应的 workflow 并点击 **Run workflow** 手动触发。

## 🎨 自定义配置

### 修改颜色主题

编辑 `css/style.css` 中的 CSS 变量：

```css
:root {
  --color-emerald-500: #10b981;  /* 主色调 */
  --color-amber-400: #f7b733;    /* 强调色 */
  /* ... */
}
```

### 修改内容

- 编辑 `index.html` 修改中文内容
- 编辑 `en/index.html` 修改英文内容

### 替换截图

将新的截图文件放置在 `assets/` 目录下：
- `screenshot.png`（轮播图1）
- `screenshot01.png`（轮播图2）

推荐尺寸：1200x630px

## 🎬 功能特性

### 图片轮播

![轮播预览](assets/screenshot01.png)

- ✅ 自动播放（5秒切换）
- ✅ 左右箭头按钮
- ✅ 底部指示器
- ✅ 键盘方向键导航
- ✅ 触摸滑动支持
- ✅ 鼠标悬停暂停

### 响应式设计

- ✅ 移动端汉堡菜单
- ✅ 自适应布局
- ✅ 触摸友好交互

### PWA 支持

- ✅ 可安装到桌面
- ✅ 离线访问支持
- ✅ 原生应用体验

## 🌐 多种部署方式

### Nginx

```nginx
server {
    listen 80;
    server_name devops-dash.junxinzhang.com;
    root /path/to/devops-dash-landing-page;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

### AWS S3

1. 创建 S3 存储桶
2. 上传所有文件
3. 配置静态网站托管
4. 配置 CloudFront（可选）

## 📄 参考来源

- **产品官网**: https://devops-dash.junxinzhang.com
- **项目仓库**: https://github.com/junxinzhang/devops-dash-landing-page

## 👨‍💻 作者

**Jason Zhang**

- 📧 Email: jason2023zhang@gmail.com
- 🐦 Twitter/X: [@Jasonz9788](https://x.com/Jasonz9788)
- 🌐 Blog: [https://junxinzhang.com](https://junxinzhang.com)
- 💬 微信: winnielove2020

## 📜 License

MIT

---

⭐ 如果这个项目对你有帮助，欢迎 Star！
