app.directive('sideBar', function(){
    return {
        restrict: 'A',        
        templateUrl: 'templates/directives/sidebar.html'
    };
});

/*
 *  
 */
app.directive('productList', function(){
    return {
        restrict: 'E',        
        templateUrl: 'templates/directives/productList.html'
    };
});