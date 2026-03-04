---
layout: home
---

# 欢迎来到 Reynold 的博客

这里记录我的技术学习、项目经验和生活感悟。

## 最新文章

{% for post in site.posts limit:5 %}
### [{{ post.title }}]({{ post.url }})
*{{ post.date | date: "%Y-%m-%d" }}*

{{ post.excerpt }}

---
{% endfor %}

## 关于我

热爱编程，喜欢探索新技术。欢迎交流！

- GitHub: [reynoldli](https://github.com/reynoldli)
