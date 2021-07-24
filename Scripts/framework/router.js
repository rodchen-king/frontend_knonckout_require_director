/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-07-24 12:08:10
 * @LastEditTime: 2021-07-24 13:37:12
 * @LastEditors: rodchen
 */
define(['WebPageContrl', 'Routes', 'Router'], function (WebPageContrl, Routes, Router) {
	var routes = {};

	$.each(Routes, function(key, value) {
		var values = value.split(' ');
		var pageName = values[0];
		routes[key] = function() {
		    WebPageContrl.initJS(pageName);
		};
	});

	var router = new Router(routes).configure({
		notfound: function() {
			routes['/error404/:code'](404);
		}
	});

	var urlNotAtRoot = window.location.pathname && (window.location.pathname != '/');

	if (urlNotAtRoot) {
		router.init();
	} else {
		router.init('/');
	}

	return router;
});