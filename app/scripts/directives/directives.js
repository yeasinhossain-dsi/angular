/*
 * 
 * @param {type} param1
 * @param {type} param2 testing directive
 */
app.directive('addMore', function(){
    
    return {
        'restrict': 'EA',
        templateUrl: 'templates/directives/test-directive.html'
    }
    
});

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
app.directive('productList', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/productList.html',
        controller: ['$scope', 'userStatusService', function( $scope, userStatusService ){                
            
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
        }]
    };
});