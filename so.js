// ==UserScript==
// @name StackTopReorder
// @description A top bar in a different order.
// @namespace TravisJ
// @author TravisJ
// @license GNU GPL v3 (http://www.gnu.org/copyleft/gpl.html)
// @include http://meta.stackoverflow.com/*
// @include http://stackoverflow.com/*
// @include *.stackexchange.com/*

//main
(function main() {
	var $ = document.querySelector.bind(document);
	var observer = new MutationObserver(function(mutations) {
	  if($("#search .btn.js-search-submit")){
		observer.disconnect();
		var logoLinks = $('.-main');
		var logo = logoLinks.querySelector('a.-logo._glyph');
		logoLinks.parentNode.appendChild(logoLinks);
		
		var name = $('div.-actions a.my-profile.js-gps-track');
		name.parentNode.appendChild(name);

		var actions = $('div.-actions ol.-list');
		[].slice.call(actions.querySelectorAll('li.-item'),0).reverse().forEach(f => actions.appendChild(f));
	  }
	});
	 	
	var config = { attributes: false, childList: true, characterData: false };
	observer.observe(document.documentElement, config);
})();

