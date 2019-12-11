/*
 =========================================================================
 == AliExpress reLinker (ePN)                                           ==
 == Automatic replacement of links to ePN DeepLink for AliExpress.      ==
 == Author: Sergey Avdeev                                               ==
 == E-Mail: avdeevsv91@gmail.com                                        ==
 == URL: https://github.com/avdeevsv91/aliexpress_epn_relinker_opera    ==
 =========================================================================
*/

// Write default values to local storage (if don`t exist)
function setDefaultValues(force) {
	if((force == true) || (localStorage.link === undefined)) {
		localStorage.link = 'https://gotbest.by/redirect/cpa/o/q2c95si7j26fb0szgiomd0thp9ax67rt/';
	}
	if((force == true) || (localStorage.sub === undefined)) {
		localStorage.sub = 'default_opera';
	}
	if((force == true) || (localStorage.forced === undefined)) {
		localStorage.forced = false;
	}
	if((force == true) || (localStorage.ttl === undefined)) {
		localStorage.ttl = 60;
	}
	if((force == true) || (localStorage.noreferrer === undefined)) {
		localStorage.noreferrer = true;
	}
}

// Listener for onInstalled action
chrome.runtime.onInstalled.addListener(function(object) {
	// Set default values after install
	if(object.reason == 'install') {
		setDefaultValues(true);
	} else if(object.reason == 'update') {
		setDefaultValues(false);
	}
});

// Listener for getLocalStorage method
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	switch(request.method) {
		case 'getLocalStorage': // Return local storage object
			sendResponse(localStorage);
			break;
		case 'getCookie': // Retrieves information about a single cookie
			chrome.cookies.get(request.details, sendResponse);
			return true;
		case 'setCookie': // Sets a cookie with the given cookie data
			chrome.cookies.set(request.details, sendResponse);
			return true;
		default:
			sendResponse({}); // None
	}
});
