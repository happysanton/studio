document.querySelectorAll('.cover-image').forEach(function(button) {
    button.addEventListener('click', function() {
        // 找到對應的影片區塊（最接近的父層 .videoBox）
        var videoBox = button.closest('.videoBox');
        
        // 找到影片封面和影片容器
        var coverImage = videoBox.querySelector('.cover-image');
        var videoContainer = videoBox.querySelector('.video-container');
        
        // 顯示影片，隱藏封面
        coverImage.style.display = 'none';
        videoContainer.style.display = 'block';

        // 取得對應 iframe 的 src，並加上 autoplay 參數
        var iframe = videoBox.querySelector('iframe');
        var src = iframe.src;

        // 檢查並加上 autoplay 參數
        if (src.indexOf('autoplay=1') === -1) {
            iframe.src = src + (src.includes('?') ? '&' : '?') + 'autoplay=1';
        }
    });
});