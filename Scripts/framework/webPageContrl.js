/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-07-24 12:08:10
 * @LastEditTime: 2021-07-24 21:33:46
 * @LastEditors: rodchen
 */
define(['knockout', 'jquery', 'Router', 'Custom'], function (ko, $, Router) {
	var initialRun = true;

	function isEndSharp() { // url end with #
		if (app.lastUrl != "" && location.toLocaleString().indexOf(app.lastUrl) != -1 && location.toLocaleString().indexOf('#') != -1 && location.hash == "") {
			return true;
		}

		return false;
	}

	var app = {
    // 每次路由切换，调用当前方法
	  initJS: function (pageName) {
			require([pageName + '-js'], function (page) {
				debugger
					app.init(pageName, page);
			});
	  },
		init: function(pageName, pageData) {
			if (isEndSharp()) {
				return;
			}

      // js模块的init方法执行
			pageData.init(); 

      // ko绑定的数据，数据绑定的数据源是js模块里的data模块
			app.page({
			    name: pageName,				// 路由对应的page标识
			    data: pageData
			}); 

      // 初次执行，ko绑定
			if (initialRun) {
				ko.applyBindings(app, document.getElementsByTagName('html')[0]); 
				initialRun = false;
			}
		},
		page: ko.observable({
			name: '', 
			data: {
				init: function() {}
			}
		}),
		// knockout template 加载成功之后的回掉函数
		afterRender: function() {
			if (app.page().data.afterRender) {
				app.page().data.afterRender();
			}
		}
	};

	return app;
});