angular.module('RouteControllers', [])
	.controller('HomeController', function($scope) {
		$scope.title = "About Us";
		$scope.aboutNemesis = "Nemesis Tattoo & Body Piercing Studio has opened for business in 2009 in Camden Town, London. The resident tattoo artists, guest artists and body piercers with years of experience offer the highest quality body art to our customers in a hygienic and 100% safe environment. We specialise in realistic, old school, new school, traditional tattoo styles, but we are always open for new ideas and challenges. We also offer laser tattoo removal and have an extensive range of body jewellery.";
		//$scope.images = ["/images/tattoo_1.jpg", "/images/Zoli_piercing_1.jpg", "/images/NemesisTattooRemoval-01.jpg"];
	})
	.controller('TattooController', function($scope) {
		$scope.images01 = ["/images/Attila_portfolio/Attila_tattoo_1.jpg", "/images/Attila_portfolio/bride_corpse_.jpg", "images/Attila_portfolio/chicano_girl.jpg", "/images/Attila_portfolio/chics_copy.jpg",
		"/images/Attila_portfolio/clown_girl.jpg", "/images/Attila_portfolio/clown_girl_2.jpg", "/images/Attila_portfolio/columbian_girl.jpg", "images/Attila_portfolio/d_harley_quinn.jpg", 
		"images/Attila_portfolio/day_of_the_dead_.jpg", "images/Attila_portfolio/day_of_the_dead_2.jpg", "images/Attila_portfolio/dog_portrait.jpg", "images/Attila_portfolio/flower.jpg",
		"images/Attila_portfolio/frangipani.jpg", "images/Attila_portfolio/full_back_cinema.jpg", "images/Attila_portfolio/gagged_girl.jpg", "images/Attila_portfolio/gargoyle_copy.jpg",
		"images/Attila_portfolio/geisha_copy.jpg", "images/Attila_portfolio/gipsy_girl.jpg", "images/Attila_portfolio/hun.jpg", "images/Attila_portfolio/lion.jpg",
		"images/Attila_portfolio/lioness.jpg", "images/Attila_portfolio/music_sleeve.jpg", "images/Attila_portfolio/portrait_on_hand.jpg", "images/Attila_portfolio/pr9jt5yr.jpg",
		"images/Attila_portfolio/raven.jpg", "images/Attila_portfolio/red_rose_botty.jpg", "images/Attila_portfolio/religion_full_sleeve.jpg", "images/Attila_portfolio/scafander.jpg",
		"images/Attila_portfolio/skull.jpg", "images/Attila_portfolio/skull_girl_rose_blood.jpg", "images/Attila_portfolio/t2b4ucrk.jpg", "images/Attila_portfolio/Untitled-2.jpg"];
		$scope.images02 = ["/images/Tomi_portfolio/anchor.jpg", "/images/Tomi_portfolio/balloon.jpg", "/images/Tomi_portfolio/butterfly.jpg", "/images/Tomi_portfolio/cherry_tree.jpg",
		"/images/Tomi_portfolio/circles.jpg", "images/Tomi_portfolio/compass.jpg", "images/Tomi_portfolio/dangerzone.jpg", "images/Tomi_portfolio/dot_flower.jpg", 
		"images/Tomi_portfolio/dotwork_diamond.jpg", "images/Tomi_portfolio/flowers.jpg", "images/Tomi_portfolio/hairdresser.jpg", "images/Tomi_portfolio/kissing_moon.jpg",
		"images/Tomi_portfolio/parrot.jpg", "images/Tomi_portfolio/rose_lace.jpg", "images/Tomi_portfolio/sherlock.jpg", "images/Tomi_portfolio/sugarskull.jpg",
		"images/Tomi_portfolio/t-rex.jpg", "images/Tomi_portfolio/ufo.jpg", "images/Tomi_portfolio/wolf.jpg", "images/Tomi_portfolio/woman_in_water.jpg"];
		$scope.images03 = ["/images/Cesar_portfolio/bull.jpg", "/images/Cesar_portfolio/cat.jpg", "/images/Cesar_portfolio/chest_demon.jpg", "/images/Cesar_portfolio/dagger.jpg", 
		"/images/Cesar_portfolio/death_before_dishonor.jpg", "/images/Cesar_portfolio/forest_heart.jpg", "/images/Cesar_portfolio/geisha.jpg", "/images/Cesar_portfolio/geo_heart.jpg",
		"/images/Cesar_portfolio/hand.jpg", "/images/Cesar_portfolio/hong_kong.jpg", "/images/Cesar_portfolio/jason.jpg", "/images/Cesar_portfolio/mixtape_robot.jpg",
		"/images/Cesar_portfolio/pineapple.jpg", "/images/Cesar_portfolio/red_wolf.jpg", "/images/Cesar_portfolio/rose.jpg", "/images/Cesar_portfolio/sheep.jpg",
		"/images/Cesar_portfolio/skull.jpg", "/images/Cesar_portfolio/skull_axe.jpg", "/images/Cesar_portfolio/snake.jpg", "/images/Cesar_portfolio/tiger.jpg",
		"/images/Cesar_portfolio/umbrella_london.jpg", "/images/Cesar_portfolio/upside_down.jpg", "/images/Cesar_portfolio/wolf.jpg", "/images/Cesar_portfolio/wolf_2.jpg"];

	})
	.controller('PiercingController', function($scope) {
		$scope.images = ["/images/Zoli_portfolio/chest_surface.jpg", "/images/Zoli_portfolio/double_tragus.jpg",
		"/images/Zoli_portfolio/ear.jpg", "/images/Zoli_portfolio/industrial.jpg", "/images/Zoli_portfolio/medusa.jpg", "/images/Zoli_portfolio/microdermal.jpg",
		"/images/Zoli_portfolio/microdermal_2.jpg", "/images/Zoli_portfolio/microdermal_lady.jpg", "/images/Zoli_portfolio/neck.jpg", "/images/Zoli_portfolio/cheeks.jpg", "/images/Zoli_portfolio/septum.jpg",
		"/images/Zoli_portfolio/sharkbites.jpg", "/images/Zoli_portfolio/smiley.jpg", "/images/Zoli_portfolio/treble_cartilidge.jpg", "/images/Zoli_portfolio/treble_nostril.jpg", "/images/Zoli_portfolio/bearded.jpg"];
	})
	.controller('RemovalController', function($scope) {
		$scope.images = ["/images/Laser_removal/tattoo_removal_01.jpg", "/images/Laser_removal/tattoo_removal_02.jpg", "/images/Laser_removal/tattoo_removal_03.jpg", "/images/Laser_removal/tattoo_removal_04.jpg"];
	})
	.controller('ContactController', function($scope) {

	})
	.controller('FaqController', function($scope) {

	});