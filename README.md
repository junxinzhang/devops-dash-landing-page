# DevOps Dashboard Landing Page

DevOps Dashboard 的官方落地页，展示产品功能、技术架构和快速入门指南。

## 项目结构

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

## 技术栈

- **HTML5** - 语义化标签，SEO优化
- **Tailwind CSS** - 通过 CDN 引入
- **Vanilla JavaScript** - 无框架依赖
- **AOS** - 滚动动画库
- **Remix Icon** - 图标库

## 功能特性

- 响应式设计，支持移动端和大屏
- 中英文双语支持
- PWA 支持
- SEO 优化（Schema.org 结构化数据）
- 滚动动画效果
- 图片轮播
- FAQ 手风琴

## 本地开发

由于是纯静态页面，可以直接用任何 HTTP 服务器运行：

```bash
# 使用 Python
python -m http.server 8080

# 使用 Node.js
npx serve .

# 使用 PHP
php -S localhost:8080
```

然后访问 http://localhost:8080

## 部署

### GitHub Pages

1. 将代码推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择分支和目录

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

## 自定义

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

### 添加截图

将截图放入 `assets/` 目录，推荐尺寸 1200x630px

## License

MIT
