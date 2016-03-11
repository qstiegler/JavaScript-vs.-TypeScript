module OrderFoodApp {
    "use strict"; 

    class MainController {
        search: string;
        articles: Article[];
        
        static $inject = ["$http"];
        constructor(private $http: ng.IHttpService) {            
            this.search   = '';
            this.articles = [];

            this.getArticles()
                .then((result: ng.IHttpPromiseCallbackArg<Article[]>) => {
                    this.articles = result.data;
                });
        }
        
        private getArticles(): ng.IPromise<Article[]> {
            return this.$http.get('./articles.json');
        }
    }

    angular
       .module("OrderFoodApp")
       .controller("MainController", MainController);
}