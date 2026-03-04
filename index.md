---
layout: default
title: Reynold 的博客
---

<div class="hero">
    <h1>欢迎来到 Reynold 的博客</h1>
    <p>这里记录我的技术学习、项目经验和生活感悟。</p>
</div>

## 最新文章

<div class="post-list">
{% for post in site.posts limit:5 %}
    <article class="post-card">
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <p class="post-meta">{{ post.date | date: "%Y年%m月%d日" }}</p>
        <p>{{ post.excerpt }}</p>
        <a href="{{ post.url }}">阅读更多 →</a>
    </article>
{% endfor %}
</div>
