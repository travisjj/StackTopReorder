// ==UserScript==
// @name StackTopReorder
// @description A top bar in a different order.
// @namespace TravisJ
// @author TravisJ
// @license GNU GPL v3 (http://www.gnu.org/copyleft/gpl.html)
// @include http://meta.stackoverflow.com/*
// @include http://stackoverflow.com/*
// @include *.stackexchange.com/*

//jQuery injection
function $$(f) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = "(" + f.toString() + ")(jQuery)";
    document.body.appendChild(script).parentNode.removeChild(script);
};

//reorder the new topbar
$$(function($){
    var logoLinks = $('.-main');
    var logo = $('a.-logo._glyph',logoLinks);
	logo.css('width','25px');
	$('span',logo).css('width','25px');
    var url = $('span',logo).css('background-image');
    logoLinks.parent().append(logoLinks);

    var name = $('div.-actions a.my-profile.js-gps-track');
    name.parent().append(name);
    name.css('margin-right','35px');

    var actions = $('div.-actions ol.-list');
    actions.append(actions.children('li.-item').get().reverse());
});

