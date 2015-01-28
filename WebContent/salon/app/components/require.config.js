require.config({
	baseUrl : 'app',
	paths : {
		'css' : '../vendor/require/css',
		'text' : '../vendor/require/text',
		'cs' : '../vendor/require/cs',
		'jquery' : '../vendor/jquery/jquery-1.10.2.min',
		'bootstrap' : '../vendor/bootstrap/js/bootstrap.min',
		'angular' : '../vendor/angular/angular',
		'angular-route' : '../vendor/angular/angular-route',
		'ui-bootstrap' : '../vendor/angular/ui-bootstrap-tpls',
		'underscore' : '../vendor/underscore',
		'coffee-script' : '../vendor/coffeescript/coffee-script'
	},

	shim : {
		underscore : {
			exports : '_'
		},

		angular : {
			deps : [ 'jquery' ],
			exports : 'angular'
		},
		
		'angular-route' : {
			deps : [ 'angular' ],
			exports : 'angular-route'
		},
		
		'ui-bootstrap' : {
			deps : [ 'angular' ],
			exports : 'ui-bootstrap'
		},
		
		'coffee-script' : {
			exports : 'coffee-script'
		},
		
		cs : {
			exports : 'cs'
		},

		bootstrap : {
			deps : [ 'jquery' ]
		},

		jquery : {
			exports : 'jQuery'
		}
//		,

//	 simple dependency declaration
//	    'angular-strap':        ['angular', 'bootstrap','timepicker', 'datepicker']

	},
	waitSeconds : 60,
});
