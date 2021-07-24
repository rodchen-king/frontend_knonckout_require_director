/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-07-24 12:08:10
 * @LastEditTime: 2021-07-24 15:01:05
 * @LastEditors: rodchen
 */
var paths = {
/* TODO: register all AMD modules by providing CamelCase aliases, exceptions are RequireJS plugins and named AMD modules, whose names are fixed */
/* follow files dictionary order */
'jquery': 'Scripts/lib/jquery',
'Routes': 'Scripts/framework/routes',
'knockout': 'Scripts/lib/knockout',


//framework
'Router': 'Scripts/lib/director',
'WebPageContrl': 'Scripts/framework/webPageContrl',
'AppRouter': 'Scripts/framework/router',
'Error-js': 'Scripts/app/Error',
'Error-html': 'templates/Error-html.html',
"knockout-amd-helpers": "Scripts/lib/knockout-amd-helpers",
"text": "Scripts/lib/text",

//bootstrap
'Custom': 'Scripts/lib/custom',
'Bootstrap': 'Scripts/lib/bootstrap.min',

//Customer
'CustomerIntroduction-html': 'templates/customer/CustomerIntroduction.html',
'CustomerIntroduction-js': 'Scripts/app/customer/CustomerIntroduction',

 //require
'RequireIntroduction-html': 'templates/require/RequireIntroduction.html',
"RequireIntroduction-js": 'Scripts/app/require/RequireIntroduction',
'RequireCode-html': 'templates/require/RequireCode.html',
"RequireCode-js": 'Scripts/app/require/RequireCode',

//Javascript
'UnknowJavascriptSecond-html': 'templates/javascript/UnknowJavascriptSecond.html',
'UnknowJavascriptSecond-js': 'Scripts/app/javascript/UnknowJavascriptSecond',
};

var baseUrl = '/';

require.config({
	baseUrl: baseUrl,
	paths: paths,

	shim: {
		/* TODO: provide all needed shims for non-AMD modules */
		'Router': {
			exports: 'Router'
		},
		'Custom': {
            exports: 'Custom'
		},
		'Custom': ['Bootstrap'],
		'Bootstrap': ['jquery']
	}
});

require(["jquery", "RequireIntroduction-js", "text!RequireIntroduction-html"],
    function ($, module, html) {
        console.log("Start test require html!");
        $('#main').html(html);
        console.log("Start test require js!");
        module.TestRequireJs();
    }
);


// require(["knockout", "knockout-amd-helpers", "text"], function (ko) {
//     ko.bindingHandlers.module.baseDir = "modules";

//     //fruits/vegetable modules have embedded template
//     ko.bindingHandlers.module.templateProperty = "embeddedTemplate";
// });

// require(['AppRouter'], function(){
// });

