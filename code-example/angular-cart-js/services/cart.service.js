(function() {
    'use strict';
    
    /**
     * @name CartService
     * @desc CartService factory which handles all functionalities of the cart
     */
    angular.module('OrderFoodApp')
        .factory('CartService', function() {
            var items = [];

            return {
                getItems: function() {
                    return items;
                },
                addArticle: function(article) {
                    items.push(article);
                },
                removeArticle: function(article) {
                    for (var i = 0; i < items.length; i++) {
                        if (items[i].id === article.id) {
                            items.splice(i, 1);
                            return   
                        }
                    }
                },
                sum: function() {
                    return items.reduce(function(total, article) {
                        return total + article.price;
                    }, 0);
                }
            };
        });    
})();
