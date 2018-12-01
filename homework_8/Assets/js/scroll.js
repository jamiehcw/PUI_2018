/* to allow for horizontal scroll while scrolling vertically on the track pad or the mouse */
(function() {
    function scrollHorizontally(h) {
        h = window.event || h;
        var delta = Math.max(-1, Math.min(1, (h.wheelDelta || -h.detail)));
        document.documentElement.scrollLeft -= (delta*100); // Multiplied by 100 to change amount scrolled
        document.body.scrollLeft -= (delta*100); // Multiplied by 100 to change amount scrolled
        h.preventDefault();
    }
    if (window.addEventListener) {
        // Chrome
        window.addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } 
})();