let currentIndex = 0;
const images = document.querySelectorAll('.curved-image');

function changeImage() {
    // 移除當前圖片的 active 類別
    images[currentIndex].classList.remove('active');

    // 更新索引，並確保索引在範圍內
    currentIndex = (currentIndex + 1) % images.length;

    // 添加新的 active 類別
    images[currentIndex].classList.add('active');
}

// 每隔 3 秒切換圖片
setInterval(changeImage, 3000);

document.addEventListener("DOMContentLoaded", function () {
    const marquee = document.querySelector('.marquee');
    const text = marquee.innerHTML; 

    while (marquee.scrollWidth < window.innerWidth * 2) {
        marquee.innerHTML += text;  // 自動重複內容，確保足夠長
    }
});