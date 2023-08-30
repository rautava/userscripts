// ==UserScript==
// @name         Geni Auto Expand Bio
// @namespace    4525639+rautava@users.noreply.github.com
// @version      1.1
// @description  Expand Bio sections automatically.
// @author       Tommi Rautava
// @license      CC0-1.0
// @match        https://www.geni.com/people/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  var readMoreElem = document.querySelector('a.toggle_link[id^="bio_"]');

  if (readMoreElem) {
    readMoreElem.click();
  }
})();
