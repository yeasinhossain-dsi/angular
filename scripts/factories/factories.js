app.factory('globalRequestInterceptor', ['$q', function($q) {
    return {
        responseError: function(data){
            console.log( data );
            return false;
        }
    };
}]);