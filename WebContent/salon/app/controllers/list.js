define([
	'angular'
],
function (angular) {
	"use strict";
	
	var module = angular.module('salon.controllers');
	
  module.controller('ListCtrl', function($scope){
	  $scope.ids = [1, 2, 3, 4, 5];
  });
});