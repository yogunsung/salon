define([
	'angular'
],
function (angular) {
	"use strict";
	
	var module = angular.module('salon.controllers');
	
  module.controller('NavbarCtrl', function($scope, $http, $location){
		 $scope.options = [ {
			jsId : 'a',
			jsName : 'angularjs'
		}, {
			jsId : 'b',
			jsName : 'backbone'
		}, {
			jsId : 'k',
			jsName : 'knockoutjs'
		}, {
			jsId : 'r',
			jsName : 'requirejs'
		} ];
		 
		 $scope.printSelect = function(){
			 console.log($scope.selectedVal);
		 }
	  
	  $scope.isActive = function(route) {
// console.log($location.path());
		  var path = $location.path();
			if (path.indexOf('/comprise') == 0) {
				return route === '/comprise';
			}else if (path.indexOf('/featrue') == 0){
				return route === '/feature';
			}
			return route === $location.path();
		}
	  

		  $http.get("app/json/nav.json").success(function(json) {
			  $scope.navbar = json;
		});
  });
});