(function() {
    'use strict';

    /**
     * @name searchForm
     * @desc Directive for the search form
     */
    angular.module('OrderFoodApp')
        .directive('searchForm', function() {
            return {
                restrict: 'E', 
                scope: { search: '=' },
                templateUrl: '../partials/search.html'
            }
        });
})();