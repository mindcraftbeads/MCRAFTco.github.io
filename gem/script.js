document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        const mainImg = item.querySelector('.main-img');
        const altImg = item.querySelector('.alt-img');
        mainImg.style.opacity = 0;
        altImg.style.opacity = 1;
    });

    item.addEventListener('mouseout', () => {
        const mainImg = item.querySelector('.main-img');
        const altImg = item.querySelector('.alt-img');
        mainImg.style.opacity = 1;
        altImg.style.opacity = 0;
    });

// 加载页面中的内容
function loadItems() {
    // 清空现有的项目
    gridContainer.innerHTML = '';

    // 计算起始索引和结束索引
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

    // 为每个项目生成 HTML 并插入
    for (let i = startIndex; i < endIndex; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.innerHTML = `
            <div class="image-container">
                <img src="bead${i + 1}.jpg" alt="Bead ${i + 1}" class="main-img">
                <img src="bead${i + 1}_alt.jpg" alt="Bead ${i + 1} Alt" class="alt-img">
            </div>
            <p class="item-description">Bead Description ${i + 1}</p>
        `;
        gridContainer.appendChild(gridItem);
    }
}

// 初始化加载第一页
loadItems();
});
