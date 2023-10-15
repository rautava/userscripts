// ==UserScript==
// @name         Geni Auto Expand Bio
// @namespace    4525639+rautava@users.noreply.github.com
// @version      1.2
// @description  Expand Bio sections automatically.
// @author       Tommi Rautava
// @license      CC0-1.0
// @match        https://www.geni.com/people/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  let readMoreElem = document.querySelector('a.toggle_link[id^="bio_"]');

  if (readMoreElem) {
    readMoreElem.click();
  }

  let moreChildrenElem = document.evaluate('//tr[@id="family_handprint"]//a[@href="#"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

  if (moreChildrenElem.singleNodeValue) {
    moreChildrenElem.singleNodeValue.click();
  }
})();
