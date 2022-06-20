(function () {
    'use strict';
    angular.module('CountryCall', [])
    .controller('CountryController', CountryController)
	.service('CountryListService', CountryListService)
	.constant('ApiBasePath', "./countries.json")
	.directive('countryList', countryListDirective);


	function countryListDirective() {
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
	}

	function countryListDirectiveController() {
		var dctrl = this;
	dctrl.isempty = function (){
		if (dctrl.foundItems.length === 0 && dctrl.foundItems !== 'undefined'){
			return true;
		}
		return false;
	};
	}

    function CountryController(CountryListService) {

	  var promise = CountryListService.getCountryList();
	  var countrys = this;
	  countrys.search = "";
		promise.then(function (response) {
			countrys.countries = response.data;
		})
		.catch(function (error) {
			console.log("Something went terribly wrong.");
		});
	  
    }

	CountryListService.$inject = ['$http', 'ApiBasePath'];
	function CountryListService($http, ApiBasePath) {
	var service = this;
	service.getCountryList = function () {
		var response = $http({
		method: "GET",
		url: (ApiBasePath)
		});

		return response;
  	};}
    
 })();
