define([
	'angular',
	'angular-route', 
	'jquery', 
	'underscore',
	'css',
	'text',
	'bootstrap',
	'ui-bootstrap'
	],
function(angular, route, $, _) {
	"use strict";
	
	var app = angular.module('salon', ['ui.bootstrap', 'ngRoute']);
	
	app.config(['$routeProvider','$interpolateProvider',function ($routeProvider, $interpolateProvider) {
		$routeProvider
			.when('/comprise/bootstrap', {
				templateUrl: 'app/partials/bootstrap.html'
			})
			.when('/comprise/run', {
				templateUrl: 'app/partials/run.html'
			})
			.when('/comprise/scope', {
				templateUrl: 'app/partials/scope.html'
			})
			.when('/comprise/controller', {
				templateUrl: 'app/partials/controller.html'
			})
			.when('/list', {
				templateUrl: 'app/partials/list.html',
				controller: 'ListCtrl'
			})
			.when('/list/:id', {
				templateUrl: 'app/partials/detail.html',
				controller: 'DetailCtrl'
			})
			.otherwise({
				redirectTo: '/list'
		      });
		
		//改变angular数据绑定{{}}为[[]]
//		$interpolateProvider.startSymbol('[[').endSymbol(']]');
	      }]);
	

	var apps_deps = [ 'salon' ];
	
	_.each('controllers directives factories services filters'.split(' '),
		function(type) {
			var module_name = 'salon.' + type;
			// create the module
			angular.module(module_name, []);
			// push it into the apps dependencies
			apps_deps.push(module_name);
		});
	
	// load the core components
	  require([
	    'controllers/all',
//	    'directives/all',
	    'services/all',
	    'filters/all'
	  ], function () {
		  //bootstrap the app
		  angular.element(document).ready(function() {
				angular.bootstrap(document, apps_deps);//
			  });
	  });
	
//	app.controller('ListCtrl', function($scope) {});
//	app.controller('DetailCtrl', function($scope, $routeParams) {
//		$scope.id = $routeParams.id;
//	});
	
//	return app;
});