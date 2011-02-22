// ==UserScript==
// @author	Peter Müller
// @name	DIKU mailman link rewriter
// @namespace	http://fumle.dk
// @description	Changes mailman links top point to DIKUs outside entry point
// @version	1.0
// @include	https://mail.google.com/mail/*
// ==/UserScript==

document.addEventListener('mouseover', function(e) {
	if (e.target.href && e.target.href.match(/^http:\/\/lists.diku.dk/)) {
		var href = e.target.href.replace('http://lists.diku.dk', 'https://www.diku.dk');
		e.target.href = 'https://www.diku.dk/pub/login.cgi?redirect=1&back=' + href;

		var img = new Image();
		img.onload = function (args) {
			e.target.href = href;
		}
		img.src = 'https://www.diku.dk/mailman/icons/mailman.jpg';
	}
}, false);
