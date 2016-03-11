(function() {
    'use strict';
   
    /**
     * @name cart
     * @desc Directive for cart
     */   
    angular.module('app')
        .directive('cart', function() {
            return {
                restrict: 'E',
                templateUrl: '../partials/cart.html',
                controller: 'CartCtrl',
                controllerAs: 'vm'
            }
        });
    
    /**
     * @name CartCtrl
     * @desc Controller for `cart` directive
     * @requires Cart
     */
    CartCtrl.$inject = ['Cart'];
    
    function CartCtrl(Cart) {
        var vm = this;
        vm.cart = Cart;
    };
        
    angular.module('app')
        .controller('CartCtrl', CartCtrl);
})();
