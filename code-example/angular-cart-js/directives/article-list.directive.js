(function() {
    'use strict';

    /**
     * @name searchForm
     * @desc Directive for the article list
     */
    angular.module('app')
        .directive('articleList', function() {
            return {
                restrict: 'E',
                scope: {
                    'articles': '<',
                    'search': '<'
                },
                templateUrl: '../partials/article-list.html',
                controller: 'ArticleListCtrl',
                controllerAs: 'vm',
                bindToController: true
            }
        });

    /**
     * @name ArticleListCtrl
     * @desc Controller for `articleList` directive
     * @requires Cart
     */
    ArticleListCtrl.$inject = ['Cart'];

    function ArticleListCtrl(Cart) {
        var vm = this;
        vm.cart = Cart;
    };

    angular.module('app')
        .controller('ArticleListCtrl', ArticleListCtrl); 
})();

