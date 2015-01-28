define([
	'angular'
],
function (angular) {
	"use strict";
	
	var module = angular.module('salon.controllers');
	
  module.controller('FilterCtrl', function($scope){
	  $scope.amount = 1234.5678;
	  $scope.date = new Date();
  });
});