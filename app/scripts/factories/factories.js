/*  
 *  Application Constants
 */
app.factory('appFactory', function(){
    return {
        API_URL: function( service ){
            return 'api/' + service;
        },
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
}]);