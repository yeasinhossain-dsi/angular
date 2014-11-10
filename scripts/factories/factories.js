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