(function() {
    'use strict';
    
    /**
     * @name MainController
     * @requires $http
     * @desc MainController for the app
     */
    MainController.$injector = ['$http'];

    function MainController($http) {
        var vm = this;
        vm.search   = '';
        vm.articles = [];
        
        $http.get('./articles.json').then(function(response) {
            vm.articles = response.data;
        });
    };

    angular.module('OrderFoodApp')
        .controller('MainController', MainController);
})();