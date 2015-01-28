define ['angular'], ->
	'use strict'
	
	angular.module 'salon.controllers'
	.controller 'CoffeeCtrl', ($scope) ->
		$scope.greetings = ['suse', 'tom', 'mary']
		console.log $scope.greetings[0..2]
		console.log 'controllers directives factories services filters'.split ' '
		
		eat = (food) ->
			console.log('eat ' + food)
			
		menu = (index, foodName) -> 
			console.log(index + '=>' + foodName)
			
		#eat food for food in ['toast', 'cheese', 'wine']
		
		#menu i+1, dish for dish, i in ['greens', 'caviar', 'truffles', 'roast', 'cake']
		
		foods = ['broccoli', 'spinach', 'chocolate']
		#eat food for food in foods when food isnt 'chocolate'
		
		console.log (num for num in [10..1])
		
		yearsOld = max: 10, ida: 9, tim: 11

		#返回数组
		ages = for child, age of yearsOld
			"#{child} is #{age}"
	  		
		#for child, age of yearsOld
		#	console.log(child + ' is ' + age)
	  		
		console.log(ages)
	  	
		coffee = '''
			<strong>
				cup of coffee
			</strong>'''
		console.log(coffee)
  		
