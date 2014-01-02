// ==UserScript==
// @author	Peter Müller
// @name	Politiken.dk nag
// @namespace	http://fumle.dk
// @description	Removes nagging screen to get a subscription
// @version	1.0
// @include	http://politiken.dk/*
// ==/UserScript==

var removal = [
        '#meteroverlay',
        '#teaserwrapper'
    ];

window.onload = function () {

    removal.forEach(function (selector) {
        Array.prototype.forEach.call(document.querySelectorAll(selector), function (el) {
            el.parentNode.removeChild(el);
        });
    });

    document.body.style.overflow = 'auto';
};
