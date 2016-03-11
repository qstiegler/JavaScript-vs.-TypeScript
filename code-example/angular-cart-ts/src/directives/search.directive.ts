module OrderFoodApp {
    'use strict';

    /**
     * @name searchForm
     * @desc Directive for the search form
     */
    class SearchForm implements ng.IDirective {
        public restrict = "E";
        public scope = { 'search': '=' };
        public templateUrl = '../partials/search.html';

        static instance(): ng.IDirective {
            return new SearchForm();
        }
    }

    angular
        .module("OrderFoodApp")
        .directive('searchForm', SearchForm.instance);
}