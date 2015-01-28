define ['angular'], ->
	'use strict'

	angular.module 'salon.controllers'
	.controller 'githubCtrl', ($scope, $timeout, githubSrv) ->
		$scope.githubStyle = {
			'margin': '5px'
		}
		$scope.$watch 'username', (newUserName) ->
			if newUserName
				timeout = null
				if timeout
					$timeout.cancel timeout
				timeout = $timeout ->
					githubSrv.events newUserName
					.success (data, status, headers) ->
						$scope.message = data.data
				,2000
