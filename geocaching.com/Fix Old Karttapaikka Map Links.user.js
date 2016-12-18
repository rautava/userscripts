// ==UserScript==
// @id             www.geocaching.com-4010d69e-c851-413d-baee-0c8a36204a48
// @name           Fix Old Karttapaikka Map Links
// @version        1.0
// @namespace      assankassa@gmail.com
// @author         Tommi Rautava
// @license        GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @description    The script fixes old Karttapaikka map links.
// @include        http://www.geocaching.com/geocache/*
// @include        https://www.geocaching.com/geocache/*
// @include        http://www.geocaching.com/seek/cache_details.aspx*
// @include        https://www.geocaching.com/seek/cache_details.aspx*
// @include        http://www.geocaching.com/hide/wptlist.aspx?*
// @include        https://www.geocaching.com/hide/wptlist.aspx?*
// @run-at         document-end
// @grant          GM_log
// ==/UserScript==
////////////////////////////////////////////////////////////////////////////////
//
//    Fix Old Karttapaikka Map Links
//    Copyright (C) 2016  Tommi Rautava
//
//    Permission is hereby granted, free of charge, to any person obtaining a
//    copy of this software and associated documentation files (the
//    "Software"), to deal in the Software without restriction, including
//    without limitation the rights to use, copy, modify, merge, publish,
//    distribute, sublicense, and/or sell copies of the Software, and to
//    permit persons to whom the Software is furnished to do so, subject to
//    the following conditions:
//    
//    The above copyright notice and this
//    permission notice shall be included in all copies or substantial
//    portions of the Software.
//    
//    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT
//    WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
//    THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
//    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
//    LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
//    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
//    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
////////////////////////////////////////////////////////////////////////////////

function fixLink(elemId) {
	var mapLinksSpan = document.getElementById(elemId);

	if (mapLinksSpan) {
		var links = mapLinksSpan.getElementsByTagName("A");
		
		for (var idx = links.length - 1; idx >= 0; idx--) {
			var link = links.item(idx);

			if (link.hostname == "kansalaisen.karttapaikka.fi") {
				GM_log("Karttapaikka map link found");

				var res = link.search.match(/y=(\d+\.\d+)\&x=(\d+\.\d+)/);
				if (res) {
					link.href = "http://www.elisanet.fi/weellu/karttapaikka/testi.html?lat="+ res[1] +"&lon="+ res[2];
				}
			}
		}
	}
};

GM_log("Fix Old Karttapaikka Map Links loaded");
fixLink("ctl00_ContentBody_MapLinks_MapLinks");

// EOF