(function() {
    'use strict';

    /**
     * @name searchForm
     * @desc Directive for the article list
     */
    angular.module('OrderFoodApp')
        .directive('articleList', function() {
            return {
                restrict: 'E',
                scope: {
                    'articles': '<',
                    'search': '<'
                },
                templateUrl: '../partials/article-list.html',
                controller: 'ArticleListController',
                controllerAs: 'vm',
                bindToController: true
            }
        });

    /**
     * @name ArticleListController
     * @desc Controller for `articleList` directive
     * @requires Cart
     */
    ArticleListController.$inject = ['CartService'];

    function ArticleListController(CartService) {
        var vm = this;
        vm.cart = CartService;
    };

    angular.module('OrderFoodApp')
        .controller('ArticleListController', ArticleListController); 
})();

