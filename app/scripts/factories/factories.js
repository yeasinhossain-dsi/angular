/*  
 *  Application Constants
 */
app.factory('appFactory', function(){
    return {
        IS_LOGGED_IN: 'isLoggedIn',
        AFTER_LOGIN: '/products',
        AFTER_LOGOUT: '/',
        LOGOUT_EVENT: 'logOutEvent',
        LOGIN_EVENT: 'logInEvent',
        API_URL: function( service ){
            return 'api/' + service;
        },
    };
});

/*
 *  Global request error handler
 */
app.factory('globalRequestInterceptor', ['$q', function($q) {
    return {
        responseError: function(data){  
            alert('OOPS...');
            return false;
        }
    };
}]);