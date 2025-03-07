function toggleOptions() {
    var options = document.getElementById('beads-options');
    if (options.classList.contains('active')) {
        options.classList.remove('active');
        setTimeout(() => {
            options.style.display = 'none'; // 在动画完成后隐藏
        }, 300); // 等待动画时间
    } else {
        options.style.display = 'block'; // 先显示
        setTimeout(() => {
            options.classList.add('active'); // 触发动画
        }, 10); // 短暂延迟以确保显示后触发
    }
}

// 点击页面其他区域时隐藏选项
window.onclick = function(event) {
    var options = document.getElementById('beads-options');
    var beadsImg = document.querySelector('.beads-item img');
    if (event.target !== beadsImg && options.classList.contains('active')) {
        options.classList.remove('active');
        setTimeout(() => {
            options.style.display = 'none';
        }, 300); // 等待动画时间
    }
};