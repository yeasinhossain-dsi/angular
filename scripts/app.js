var app = angular.module('myApp', ['ngRoute']);

app.config(function($httpProvider, $routeProvider) {
   

    $routeProvider
            .when('/', {
                controller: 'HomeCtrl',
                templateUrl: 'templates/home.html'
            })
            .when('/products', {
                controller: 'ProductsCtrl',
                templateUrl: 'templates/products.html'
            })
            .otherwise({
                redirectTo: '/'
            });
});


  