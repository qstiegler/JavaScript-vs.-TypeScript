module OrderFoodApp {
    'use strict';

    /**
     * @name price
     * @desc Directive for formating the price
     */
    class Price implements ng.IDirective {
        public restrict  = "E";
        public scope = { 'value': '=' };
        public templateUrl = '../partials/price.html';

        static instance(): ng.IDirective {
            return new Price();
        }
    }

    angular
        .module("OrderFoodApp")
        .directive('price', Price.instance);
}