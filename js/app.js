var app = angular.module('NemesisApp', ['ngRoute', 'RouteControllers', 'NemesisFooter']);

app.config(function($locationProvider, $routeProvider){
	$locationProvider.html5Mode(true); //Enable href routing without hashes

	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})
	.when('/tattoo', {
		templateUrl: 'templates/tattoo.html',
		controller: 'TattooController'
	})
	.when('/piercing',{
		templateUrl: 'templates/piercing.html',
		controller: 'PiercingController'
	})
	.when('/removal',{
		templateUrl: 'templates/removal.html',
		controller: 'RemovalController'
	})
	.when('/contact',{
		templateUrl: 'templates/contact.html',
		controller: 'ContactController'
	})
	.when('/faq',{
		templateUrl: 'templates/faq.html',
		controller: 'FaqController'
	});
});