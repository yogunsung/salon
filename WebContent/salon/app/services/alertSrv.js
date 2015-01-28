define([
	'angular'
],
function (angular) {
	"use strict";
	
	var module = angular.module('salon.services');
	
  module.service('alertSrv', function($rootScope){
	  var alertSrv = {};

		// 创建一个全局的 alert 数组
		$rootScope.alerts = [];

		alertSrv.add = function(type, msg) {
			$rootScope.alerts.push({
				'type': type,
				'msg': msg,
				'close': function() {
					alertSrv.closeAlert(this);
				}
			});
		};

		alertSrv.closeAlert = function(alert) {
			alertSrv.closeAlertIdx($rootScope.alerts.indexOf(alert));
		};

		alertSrv.closeAlertIdx = function(index) {
			$rootScope.alerts.splice(index, 1);
		};

		return alertSrv;

  	});
});