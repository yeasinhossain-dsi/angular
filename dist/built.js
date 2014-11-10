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
});;app.controller('HomeCtrl', function($scope, $rootScope) {
    $scope.greeting = 'Home Page';    
});

app.controller('ProductsCtrl', function($scope, $rootScope, productsService, productCategoryService) {
    $scope.greeting = 'Products Page';    
    $rootScope.main = 'Some Value';
    
    /*
     *  Product Category Callbacks     
     */
    this.productSuccess = function(data){
        $scope.category = data.data;        
    };
    this.productError = function(data){
        console.log( data );
    };
    
    productCategoryService.load().then( this.productSuccess );
    
    /*
     *  Product Callbacks
     */
    this.productSuccess = function(data){
        $scope.data = data.data;        
    };
    this.productError = function(data){
        console.log( data );
    };
    
    productsService.data = {test: true};
    productsService.load().then(this.productSuccess, this.productError);
    
});

app.controller('sidebar', function($scope, template){
    
    $scope.menuItems = [
        {id: 1, label: 'Menu 1', 'href': 'http://google.com'},
        {id: 2, label: 'Menu 2', 'href': 'http://yahoo.com'},
        {id: 3, label: 'Menu 3', 'href': 'http://baidu.com'}
    ];
    
    $scope.msg = function(item){
        console.log( item );        
    };
    
});;app.directive('sideBar', function(){
    return {
        restrict: 'A',
        templateUrl: 'templates/directives/sidebar.html'
    };
});;/*
 *  Templates Factory  
 */
app.factory('template', function(){
    
    return {
        'name': 'Nadia'
    };
    
});


/*
 *  Global request error handler
 */
app.factory('globalRequestInterceptor', ['$q', function($q) {
    return {
        responseError: function(data){
            console.log( data );
            return false;
        }
    };
}]);;/*   
 *  Product Category Service
 */
app.service('productCategoryService', function($http) {

    this.service = 'api/productCategory';
    this.data = {};
    this.load = function() {
        return $http({
            url: this.service,
            method: 'GET',
            params: this.data,
            nointercept: true
        });
    };
    
    return this;
});

/*
 *  Product Service
 */
app.service('productsService', function($http) {

    this.service = 'api/products';
    this.data = {};
    this.load = function() {
        return $http({
            url: this.service,
            method: 'GET',
            params: this.data,
            nointercept: true
        });
    };
    
    return this;
});