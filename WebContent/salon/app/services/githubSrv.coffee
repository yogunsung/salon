define ['angular'], ->
	'use strict'

	angular.module 'salon.services'
	.service 'githubSrv', ($http) ->
		doRequest = (username, path) ->
			$http {
				method: 'JSONP'
				url: 'https://api.github.com/users/' + username + '/' + path + '?callback=JSON_CALLBACK'
			}
		events: (username) -> doRequest username, 'events'