// ==UserScript==
// @name         Auto Expand
// @namespace    4525639+rautava@users.noreply.github.com
// @version      1.0
// @description  Expand Bio sections automatically.
// @author       Tommi Rautava
// @license      CC0-1.0
// @match        https://www.geni.com/people/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  var readMoreElem = document.getElementById("bio_en-US_toggle");

  if (readMoreElem) {
    readMoreElem.click();
  }
})();
