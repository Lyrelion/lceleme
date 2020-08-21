(function(){
    function resize(){
        // 设计稿字体大小 100px相当于1rem
        var baseFontSize = 100;
        // 设计稿宽度 750px相当于7.5rem
        var designWidth = 750;
        // 当前屏幕宽度
        var width = window.innerWidth;
        if (width > window.screen.width) {
            window.requestAnimationFrame(resize)
        } else {
            if (width > 750) {
                width = 750
            }
            document.querySelector('html').style.fontSize = width * baseFontSize / designWidth + 'px'
        }
    }
    resize();
    // 浏览器尺寸发生改变时，修改字体大小
    window.onresize = function(){
        resize()
    }
    // 监听文档载入事件，当文档载入完毕后，修改字体大小
    document.addEventListener('DOMContentLoaded',resize)
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
        resize();
        }
    });
}())