(function() {
    'use strict';
    
    /**
     * @name price
     * @desc Directive for formating the price
     */
    angular.module('OrderFoodApp')
        .directive('price', function() {
            return {
                restrict: 'E',
                scope: { value: '=' },
                templateUrl: '../partials/price.html'
            }
        });
})();