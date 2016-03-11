module OrderFoodApp {
    'use strict';

    /**
     * @name cart
     * @desc Directive for cart
     */
    class Cart implements ng.IDirective {
        public restrict = "E";
        public scope = {
            'articles': '<',
            'search': '<'
        };
        public templateUrl = '../partials/cart.html';
        public controller = 'CartController';
        public controllerAs =  'vm';

        static instance(): ng.IDirective {
            return new Cart();
        }
    }

    angular
        .module("OrderFoodApp")
        .directive('cart', Cart.instance);
       
        
    /**
     * @name CartCtrl
     * @desc Controller for `cart` directive
     * @requires Cart
     */
    class CartController {
        cart: ICartService;
        
        static $inject = ["CartService"];
        constructor(CartService: ICartService) {
            this.cart = CartService;
        }
    }

    angular
       .module("OrderFoodApp")
       .controller("CartController", CartController);
}
