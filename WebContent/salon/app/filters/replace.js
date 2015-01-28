define([
	'angular'
],
function (angular) {
	"use strict";
	
	var module = angular.module('salon.filters');
	
  module.filter('testreplace', function(){
	  return function(input){
		  return input.replace(/test/, '');
	  };
  });
});