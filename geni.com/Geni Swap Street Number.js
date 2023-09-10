// ==UserScript==
// @name         Geni Swap Street Number
// @namespace    4525639+rautava@users.noreply.github.com
// @version      1.0
// @description  Swap the street and number in the address fields.
// @author       Tommi Rautava
// @license      CC0-1.0
// @match        https://www.geni.com/*
// @grant        none
// ==/UserScript==

let regex = /^(\d+)\s+(.+)\s*$/;

const { get, set } = Object.getOwnPropertyDescriptor(
  HTMLInputElement.prototype,
  "value"
);

(function () {
  "use strict";

  let input = document.querySelector('input[id="location_street_address1"]');

  if (input) {
    Object.defineProperty(input, "value", {
      get() {
        return get.call(this);
      },
      set(newValue) {
        let result = newValue.match(regex);

        if (result) {
          newValue = result[2] + " " + result[1];
        }

        return set.call(this, newValue);
      },
    });
  }
})();
