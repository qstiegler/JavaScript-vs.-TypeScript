(function() {
    'use strict';
    
    /**
     * @name MainCtrl
     * @requires $http
     * @desc MainCtrl for the app
     */
    MainCtrl.$injector = ['$http'];

    function MainCtrl($http) {
        var vm = this;
        vm.search   = '';
        vm.articles = [];
        
        $http.get('./articles.json').then(function(response) {
            vm.articles = response.data;
        });
    };

    angular.module('app')
        .controller('MainCtrl', MainCtrl);
})();