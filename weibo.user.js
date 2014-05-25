// ==UserScript==
// @name           Large Pictures for Weibo
// @namespace      http://www.hqhome.net
// @description    Large Pictures for Weibo
// @version        0.1
// @include        http://weibo.com/*
// ==/UserScript==
(function() {
    var imgNodes, imgUrls, i, imgClick;
    
    imgClick = function() {
        imgNodes = document.querySelectorAll('img.bigcursor');
        // imgUrls = [];
        for (i = 0; i < imgNodes.length; i++) {
            if (!imgNodes[i].className.match(/enlarged$/)) {
                imgNodes[i].click();
                imgNodes[i].className += ' enlarged';
            }
        }
    }
    
    window.addEventListener('load', imgClick);
    document.addEventListener('scroll', imgClick);
})();
