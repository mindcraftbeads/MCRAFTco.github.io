function toggleMenu() {
    var menu = document.getElementById("menu");
    var overlay = document.getElementById("overlay");
    
    // 切换菜单和遮罩层的显示
    menu.classList.toggle("open");
    overlay.classList.toggle("open");

    // 点击遮罩层时关闭菜单和遮罩层
    overlay.onclick = function() {
        menu.classList.remove("open");
        overlay.classList.remove("open");
    };
}
// 当点击屏幕其他区域时关闭菜单
window.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');
    
    // 如果点击的区域不是汉堡菜单或菜单，关闭菜单
    if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove('open');
    }
});
