angular.module('RouteControllers', [])
	.controller('HomeController', function($scope) {
		$scope.title = "About Us";
		$scope.images = ["/images/tattoo_1.jpg", "/images/Zoli_piercing_1.jpg", "/images/NemesisTattooRemoval-01.jpg"];
	});