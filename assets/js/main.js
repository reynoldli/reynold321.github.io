// 主题切换功能
const themeToggle = document.createElement('button');
themeToggle.id = 'theme-toggle';
themeToggle.innerHTML = '🌙';
themeToggle.title = '切换主题';

// 检查本地存储的主题偏好
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggle.innerHTML = '☀️';
}

// 添加切换按钮到导航栏
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.appendChild(themeToggle);
    }
    
    // 绑定点击事件
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '☀️';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '🌙';
        }
    });
});

// 搜索功能（如果在搜索页面）
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchPosts();
            }
        });
    }
}

// 代码高亮初始化
function initCodeHighlight() {
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initSearch();
    initCodeHighlight();
});
