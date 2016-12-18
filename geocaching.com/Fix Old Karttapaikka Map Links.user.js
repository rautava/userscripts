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
//    This program is free software: you can redistribute it and/or modify
//    it under the terms of the GNU General Public License as published by
//    the Free Software Foundation, either version 3 of the License, or
//    (at your option) any later version.
//
//    This program is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU General Public License for more details.
//
//    You should have received a copy of the GNU General Public License
//    along with this program.  If not, see <http://www.gnu.org/licenses/>.
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