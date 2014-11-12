/*  
 *  Sidebar Directive
 */
app.directive('sideBar', function(){
    return {
        restrict: 'A',        
        templateUrl: 'templates/directives/sidebar.html'
    };
});

/*
 *  Product Gallery Directive
 */
app.directive('productList', function($rootScope){
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/productList.html',
        controller: function( $scope, userStatusService ){                
            
            /*              
             * Actions
             */
            $scope.addToCart = function( product ){                                
                    
                var msg = product.product_name;
                
                if( !userStatusService.getStatus() )
                    userStatusService.loginModal();
                    
                else
                    alert(msg + ' Added to cart');
                
            };
        }
    };
});