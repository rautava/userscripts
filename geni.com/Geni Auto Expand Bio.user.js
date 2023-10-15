// ==UserScript==
// @name         Geni Auto Expand Bio
// @namespace    4525639+rautava@users.noreply.github.com
// @version      1.2.1
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

  let moreChildrenXpath = '//tr[@id="family_handprint"]//span[not(@style)]/a[@href="#"]';
  let moreChildrenResult = document.evaluate(moreChildrenXpath, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
  let node;

  while (node = moreChildrenResult.iterateNext()) {
    node.click();
  }
})();
