var app = angular.module('NemesisApp', ['ngRoute', 'RouteControllers']);

app.config(function($locationProvider, $routeProvider){
	$locationProvider.html5Mode(true); //Enable href routing without hashes

	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})
	.when('/tattoo', {
		templateUrl: 'templates/tattoo',
		controller: 'TattooController'
	});

});