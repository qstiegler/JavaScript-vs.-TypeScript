module OrderFoodApp {
    "use strict";
    
    export interface ICartService {
		getItems(): Article[],
        addArticle(article: Article): void,
        removeArticle(article: Article): void,
        sum(): number
    }


    export class CartService implements ICartService {
        private items: Article[];
        
        constructor() {
            this.items = [];   
        }
        
        getItems() {
            return this.items;
        }
        
        addArticle(article: Article) {
            this.items.push(article);
        }
        
        removeArticle(article: Article) {
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].id === article.id) {
                    this.items.splice(i, 1);
                    return;  
                }
            }
        }
        
        sum() {
            return this.items.reduce(function(total: number, article: Article) {
                return total + article.price;
            }, 0);
        }
    }
    
    angular
        .module("OrderFoodApp")
        .service("CartService", CartService);
}
