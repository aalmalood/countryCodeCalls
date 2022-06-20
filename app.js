(function () {
    'use strict';
    angular.module('CountryCall', [])
    .controller('CountryController', CountryController)
	.service('CountryListService', CountryListService)
	.constant('ApiBasePath', "./countries.json")
	.component('countryList', {
		templateUrl: 'country.html',
		bindings: {
			countries: '<'
			}
	});


    function CountryController(CountryListService) {

	  var promise = CountryListService.getCountryList();
	  var countrys = this;
	  countrys.search = "";
	  countrys.countries = [];
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
