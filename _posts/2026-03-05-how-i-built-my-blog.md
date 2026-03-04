---
layout: post
title: "我是如何用 VS Code 和 Kimi Code 搭建个人博客的"
date: 2026-03-05 08:00:00 +0800
categories: 教程
---

大家好，我是 Reynold。今天想分享一下我是如何从零开始，用 **VS Code** 和 **Kimi Code** 搭建这个个人博客的完整过程。

## 为什么选择这个方案

在决定搭建博客之前，我对比了几种方案：

| 方案 | 优点 | 缺点 |
|------|------|------|
| WordPress | 功能强大，插件丰富 | 需要服务器，维护成本高 |
| Hexo/Hugo | 静态生成，速度快 | 需要学习命令行操作 |
| GitHub Pages + Jekyll | 免费托管，原生支持 | 需要一定前端知识 |

最终选择了 **GitHub Pages + Jekyll**，因为：
- 完全免费
- 自动部署，push 即发布
- 可以自定义域名

## 准备工作

### 1. 创建 GitHub 仓库

首先，我在 GitHub 上创建了一个名为 `reynold321.github.io` 的仓库。这是 GitHub Pages 的特殊命名格式，可以直接通过 `https://reynold321.github.io` 访问。

### 2. 克隆到本地

```bash
git clone https://github.com/reynoldli/reynold321.github.io.git
```

### 3. 安装 VS Code 插件

为了让开发体验更好，我安装了几个必备插件：

- **Live Server** - 本地实时预览
- **Markdown All in One** - Markdown 语法支持
- **GitLens** - Git 版本控制增强

## 使用 Kimi Code 搭建

这是整个过程中最省心的部分！我只需要告诉 Kimi Code 我的需求：

> "帮我创建一个博客网站，使用 GitHub Pages 托管"

Kimi Code 就自动帮我完成了：

### 1. 创建 Jekyll 配置文件

```yaml
# _config.yml
title: Reynold 的博客
description: 分享技术、生活与思考
author: Reynold
theme: minima
```

### 2. 设计网站结构

```
reynold321.github.io/
├── _layouts/          # HTML 模板
├── _posts/            # 博客文章
├── assets/            # 静态资源
│   ├── css/
│   └── js/
├── index.html         # 首页
├── about.html         # 关于页面
└── _config.yml        # 配置文件
```

### 3. 创建可视化编辑环境

Kimi Code 帮我创建了纯 HTML 版本的页面，这样我可以用 Live Server 实时预览：

- 右键 `index.html` → Open with Live Server
- 修改 `style.css` → 浏览器自动刷新

## 自定义主题样式

Kimi Code 为我设计了一个基于 CSS 变量的主题系统：

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --bg-color: #f5f5f5;
    --card-bg: #ffffff;
    --text-color: #333333;
}
```

这样我只需要修改几个颜色值，就能改变整个网站的主题风格。

## 我的工作流程

现在我的 blogging 工作流程非常顺畅：

1. **写文章** - 在 `_posts/` 目录创建新的 Markdown 文件
2. **本地预览** - 用 Live Server 查看效果
3. **调整样式** - 修改 CSS 实时看到变化
4. **发布** - `git push` 到 GitHub，自动部署

## 总结

用 VS Code + Kimi Code 搭建博客的体验非常棒：

✅ **零配置** - 不需要折腾复杂的环境
✅ **可视化** - 实时预览，所见即所得
✅ **自动化** - 自动部署，专注写作
✅ **可定制** - 完全掌控网站样式

如果你也想搭建个人博客，强烈推荐这个方案！

---

有任何问题欢迎在评论区留言，或者通过邮件联系我：reynold321@live.com
