// ==UserScript==
// @name         MHXG WIKI ReadOnly Unlock
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Unlock MHXG WIKI's right click and select.
// @author       ChenxiSama
// @match        http://wiki.mhxg.org/*
// @grant        none
// @require      http://code.jquery.com/jquery-1.11.0.min.js
// ==/UserScript==

(function() {
    'use strict';

    $("body").removeAttr("onContextmenu");
    $("body").removeAttr("onSelectStart");
    $("body").attr("style","");
})();