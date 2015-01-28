define([
	'angular'
//	'css!../../vendor/bootstrap/css/bootstrap.min.css'
],
function (angular) {
	"use strict";
	
	var module = angular.module('salon.controllers');
	
  module.controller('AlertCtrl', function($scope){
	  $scope.alerts = [
	                   { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
	                   { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
	                   ];

	  $scope.addAlert = function() {
		  $scope.alerts.push({msg: "Another alert!"});
	  	};

	 $scope.closeAlert = function(index) {
	   $scope.alerts.splice(index, 1);
	   };

  	});
});