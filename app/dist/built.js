var app = angular.module('myApp', ['ngRoute']);

app.run(function($rootScope, userStatusService){
    $rootScope.$on("$routeChangeStart", function(event, next) {        
        
        //  Security Check for private pages
        var loginRequired = typeof( next.$$route ) === 'undefined' ? false: next.$$route.requireLogin;                
        if( loginRequired && !userStatusService.getStatus() ){
            event.preventDefault();            
            window.location = '#/login';
        }        
        
    });
});

app.config(function($httpProvider, $routeProvider) {

    $httpProvider.interceptors.push('globalRequestInterceptor');

    for( route in app.routes ){
        $routeProvider.when( route, app.routes[route] );
    }
            
    $routeProvider.otherwise({          
        templateUrl: 'templates/404.html',        
    });
});;app.controller('HomeCtrl', function($scope, $rootScope) {
    $scope.greeting = 'Home Page';    
});

app.controller('SigninCtrl', function($scope, $location, userStatusService, appFactory){
    
    $scope.signin = function(){
        userStatusService.login();
        $location.path( appFactory.AFTER_LOGIN );
    };
    
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

app.controller('topbarCtrl', function($scope, $rootScope, $location, userStatusService, appFactory){
    $scope.userName = 'Yeasin Hossain';
    $scope.isLoggedIn = userStatusService.getStatus();    
    
    $rootScope.$watch('isLoggedIn', function() {
       $scope.isLoggedIn = userStatusService.getStatus();    
    });
    $scope.logout = function(){
        userStatusService.logout();
        $scope.isLoggedIn = userStatusService.getStatus();
        $location.path( appFactory.AFTER_LOGOUT );
    };
});

app.controller('sidebarCtrl', function($scope){
    
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
 *  Application Constants
 */
app.factory('appFactory', function(){
    return {
        IS_LOGGED_IN: 'isLoggedIn',
        AFTER_LOGIN: '/products',
        AFTER_LOGOUT: '/'
    };
});

/*
 *  Global request error handler
 */
app.factory('globalRequestInterceptor', ['$q', function($q) {
    return {
        responseError: function(data){            
            return false;
        }
    };
}]);;app.filter('currencyFilter', function(){
    return function( amount ){
        
        return amount + '$';        
        
    };
});;app.routes = {
    '/': {
        controller: 'HomeCtrl',
        templateUrl: 'templates/home.html',
        requireLogin: false
    },
    '/products': {
        controller: 'ProductsCtrl',
        templateUrl: 'templates/products.html',
        requireLogin: true
    },
    '/about': {
        templateUrl: 'templates/about.html',
    },
    '/login': {
        templateUrl: 'templates/login.html',
    }
};;/* 
 *  User status Service
 */
app.service('userStatusService', function($rootScope, appFactory){
    
    this.username = null;
    this.password = null;
    this.isLoggedIn = 0;
    this.getStatus = function(){
        
        var status = localStorage.getItem( appFactory.IS_LOGGED_IN );        
        status = status === null ? 0 : parseInt(status, 10);        
        this.isLoggedIn = status;
        $rootScope.isLoggedIn = status;
        
        return status;
    };
    this.login = function(){
        localStorage.setItem( appFactory.IS_LOGGED_IN , 1);
        this.isLoggedIn = 1;
        $rootScope.isLoggedIn = 1;
    };
    this.logout = function(){
        localStorage.removeItem( appFactory.IS_LOGGED_IN );        
        this.isLoggedIn = 0;
        $rootScope.isLoggedIn = 0;
    };
    
    return this;
    
});


/*   
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