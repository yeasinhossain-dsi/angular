/* 
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
app.service('productCategoryService', function($http, appFactory) {

    this.service = appFactory.API_URL( 'productCategory.json' );
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
app.service('productsService', function($http, appFactory) {

    this.service = appFactory.API_URL( 'products.json' );
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