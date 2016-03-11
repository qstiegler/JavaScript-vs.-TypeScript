module OrderFoodApp {
    'use strict';

    /**
     * @name searchForm
     * @desc Directive for the article list
     */
    class ArticleList implements ng.IDirective {
        public restrict = "E";
        public scope = {
            'articles': '<',
            'search': '<'
        };
        public templateUrl = '../partials/article-list.html';
        public controller = 'ArticleListController';
        public controllerAs =  'vm';
        public bindToController = true;

        static instance(): ng.IDirective {
            return new ArticleList();
        }
    }

    angular
        .module("OrderFoodApp")
        .directive('articleList', ArticleList.instance);
       
        
    /**
     * @name ArticleListController
     * @desc Controller for `articleList` directive
     * @requires Cart
     */
    class ArticleListController {
        cart: ICartService;
        
        static $inject = ["CartService"];
        constructor(CartService: ICartService) {
            this.cart = CartService;
        }
    }

    angular
       .module("OrderFoodApp")
       .controller("ArticleListController", ArticleListController);
}
