/*
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
}]);