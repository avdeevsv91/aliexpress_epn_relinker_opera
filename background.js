/*
 =========================================================================
 == AliExpress reLinker (ePN)                                           ==
 == Automatic replacement of links to ePN DeepLink for AliExpress.      ==
 == Author: Sergey Avdeev                                               ==
 == E-Mail: avdeevsv91@gmail.com                                        ==
 == URL: https://github.com/avdeevsv91/aliexpress_epn_relinker_opera    ==
 =========================================================================
*/

// Listener for onInstalled action
chrome.runtime.onInstalled.addListener(function(object) {
	// Set default values
	if(localStorage.link === undefined) {
		localStorage.link = 'https://gotbest.by/redirect/cpa/o/q296f8huk6xhzhjlofgbio114xtirhsp/';
	}
	if(localStorage.sub === undefined) {
		localStorage.sub = 'default_chrome';
	}
});

// Listener for getLocalStorage method
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	switch(request.method) {
		case 'getLocalStorage': // Return local storage object
			sendResponse(localStorage);
			break;
		default:
			sendResponse({}); // None
	}
});
