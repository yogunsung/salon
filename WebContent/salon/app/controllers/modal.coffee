define ['angular'], ->
	'use strict'
	
	module = angular.module 'salon.controllers'
	
	module.controller 'ModalCtrl', ($scope, $modal, $log) ->
		$scope.items = ['item1', 'item2', 'item3']
		
		$scope.open = (size) ->
			modalInstance = $modal.open {
				templateUrl: 'myModalContent.html'
				controller: 'ModalInstanceCtrl'
				size: size
				resolve: items: -> $scope.items
			 }
			selectedFunc = (selectedItem) -> $scope.selected = selectedItem
			logFunc = -> $log.info 'Modal dismissed at: ' + new Date()
			modalInstance.result.then selectedFunc, logFunc
	
	module.controller 'ModalInstanceCtrl', ($scope, $modalInstance, items) -> 
		$scope.items = items
		$scope.selected = item: $scope.items[0]
	
		$scope.ok = -> $modalInstance.close $scope.selected.item
	
		$scope.cancel = -> $modalInstance.dismiss 'cancel'
