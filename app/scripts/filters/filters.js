app.filter('currencyFilter', function(){
    return function( amount ){
        
        return amount + ' $';        
        
    };
});


app.filter('descriptionTrimer', function(){
    return function( text ){
        
        var textLimit = 30;
        var newText = text.substring(0, textLimit);
        
        if( text.length > textLimit )
            newText = newText + '...';
        
        return newText;
        
    };
});