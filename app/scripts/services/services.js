/* 
 *  User status Service
 */
app.service('userStatusService', function($rootScope, $modal, appFactory){
    
    this.username = null;
    this.password = null;
    this.modal = null;
    
    this.getStatus = function(){        
        var status = localStorage.getItem( appFactory.IS_LOGGED_IN );        
        status = status === null ? 0 : parseInt(status, 10);                
        
        return status;
    };
    this.login = function(){
        localStorage.setItem( appFactory.IS_LOGGED_IN , 1);
        $rootScope.$emit( appFactory.LOGIN_EVENT );        
        
        if( this.modal )
            this.modal.dismiss('cancel');
    };
    this.logout = function(){
        localStorage.removeItem( appFactory.IS_LOGGED_IN );        
        $rootScope.$emit( appFactory.LOGOUT_EVENT );        
    };
    this.loginModal = function(){
        this.modal = $modal.open({
            templateUrl: 'templates/modals/login.html',                    
        });
    }
    
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