app.filter('currencyFilter', function(){
    return function( amount ){
        
        return amount + ' $';        
        
    };
});