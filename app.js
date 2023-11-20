(function () {
    'use strict';
    angular.module('CountryCall', [])
    //.controller('CountryController', CountryController)
	//.service('CountryListService', CountryListService)
	.controller('PlayerController', PlayerController)
	.service('PlayerListService', PlayerListService)
	.constant('ApiBasePath', "./countries.json")
	.constant('PlayerApiBasePath', "./players.json")
	//.directive('countryList', countryListDirective)
	.directive('playerList', playerListDirective);


	/*function countryListDirective() {
	var ddo = {
		restrict: "E",
		templateUrl: 'country.html',
		scope: {
		countries: '<'
		},
		controller: countryListDirectiveController,
		controllerAs: 'dctrl',
		bindToController: true
	};

	return ddo;
	}*/

	function playerListDirective() {
		var ddo = {
			restrict: "E",
			templateUrl: 'players.html',
			scope: {
			countries: '<'
			},
			controller: playerListDirectiveController,
			controllerAs: 'pdctrl',
			bindToController: true
		};
	
		return ddo;
		}

	/*function countryListDirectiveController() {
		var dctrl = this;
	dctrl.isempty = function (){
		if (dctrl.foundItems.length === 0 && dctrl.foundItems !== 'undefined'){
			return true;
		}
		return false;
	};
	}*/

	function playerListDirectiveController() {
		var pdctrl = this;
		pdctrl.isempty = function (){
		if (pdctrl.foundItems.length === 0 && pdctrl.foundItems !== 'undefined'){
			return true;
		}
		return false;
	};
	}

    /*function CountryController(CountryListService) {

	  var promise = CountryListService.getCountryList();
	  var countrys = this;
	  countrys.search = "";
		promise.then(function (response) {
			countrys.countries = response.data;
		})
		.catch(function (error) {
			console.log("Something went terribly wrong.");
		});
	  
    }*/

	function PlayerController(PlayerListService) {

		var promise = PlayerListService.getPlayerList();
		var countrys = this;
		countrys.search = "";
		  promise.then(function (response) {
			countrys.players = response.data;
		  })
		  .catch(function (error) {
			  console.log("Something went terribly wrong.");
		  });
		
	  }

	/*CountryListService.$inject = ['$http', 'ApiBasePath'];
	function CountryListService($http, ApiBasePath) {
	var service = this;
	service.getCountryList = function () {
		var response = $http({
		method: "GET",
		url: (ApiBasePath)
		});

		return response;
  	};}*/

	  PlayerListService.$inject = ['$http', 'ApiBasePath'];
	  function PlayerListService($http, PlayerApiBasePath) {
	  var service = this;
	  service.getPlayerList = function () {
		  var response = $http({
		  method: "GET",
		  url: (PlayerApiBasePath)
		  });
  
		  return response;
		};}
    
 })();
