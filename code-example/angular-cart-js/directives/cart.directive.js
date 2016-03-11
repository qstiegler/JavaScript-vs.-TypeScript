(function() {
    'use strict';
   
    /**
     * @name cart
     * @desc Directive for cart
     */   
    angular.module('OrderFoodApp')
        .directive('cart', function() {
            return {
                restrict: 'E',
                templateUrl: '../partials/cart.html',
                controller: 'CartController',
                controllerAs: 'vm'
            }
        });
    
    /**
     * @name CartController
     * @desc Controller for `cart` directive
     * @requires Cart
     */
    CartController.$inject = ['CartService'];
    
    function CartController(CartService) {
        var vm = this;
        vm.cart = CartService;
    };
        
    angular.module('OrderFoodApp')
        .controller('CartController', CartController);
})();
