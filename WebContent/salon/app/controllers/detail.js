define([
	'angular'
],
function (angular) {
	"use strict";
	
	var module = angular.module('salon.controllers');
	
//  module.controller('DetailCtrl', function($scope, $routeParams, alertSrv){
//	  alertSrv.add('success', '这是一个提示消息!')
//	  $scope.id = $routeParams.id;
//	  });
  
  module.controller('DetailCtrl', ['$scope', '$routeParams', 'alertSrv', function($s, params, alert){
	  alert.add('success', '这是一个提示消息!')
	  $s.id = params.id;
	  }]);
});