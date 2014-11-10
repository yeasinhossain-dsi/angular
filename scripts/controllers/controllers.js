app.controller('HomeCtrl', function($scope, $rootScope) {
    $scope.greeting = 'Home Page';    
});

app.controller('ProductsCtrl', function($scope, $rootScope, productsService, productCategoryService) {
    $scope.greeting = 'Products Page';    
    $rootScope.main = 'Some Value';
    
    /*
     *  Product Category Callbacks     
     */
    this.productSuccess = function(data){
        $scope.category = data.data;        
    };
    this.productError = function(data){
        console.log( data );
    };
    
    productCategoryService.load().then( this.productSuccess );
    
    /*
     *  Product Callbacks
     */
    this.productSuccess = function(data){
        $scope.data = data.data;        
    };
    this.productError = function(data){
        console.log( data );
    };
    
    productsService.data = {test: true};
    productsService.load().then(this.productSuccess, this.productError);
    
});

app.controller('sidebar', function($scope, template){
    
    $scope.menuItems = [
        {id: 1, label: 'Menu 1', 'href': 'http://google.com'},
        {id: 2, label: 'Menu 2', 'href': 'http://yahoo.com'},
        {id: 3, label: 'Menu 3', 'href': 'http://baidu.com'}
    ];
    
    $scope.msg = function(item){
        console.log( item );        
    };
    
});