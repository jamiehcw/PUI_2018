/* to allow for horizontal scroll while scrolling vertically on the track pad or the mouse */
(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.documentElement.scrollLeft -= (delta*40); // Multiplied by 40
        document.body.scrollLeft -= (delta*40); // Multiplied by 40
        e.preventDefault();
    }
    if (window.addEventListener) {
        // Chrome
        window.addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } 
})();