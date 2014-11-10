var app = angular.module('myApp', ['ngRoute']);

app.config(function($httpProvider, $routeProvider) {

    $httpProvider.interceptors.push('globalRequestInterceptor');

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