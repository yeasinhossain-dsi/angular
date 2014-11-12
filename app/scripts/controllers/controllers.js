app.controller('HomeCtrl', function($scope) {
    $scope.greeting = 'Welcome homes';        
});

app.controller('SigninCtrl', function($scope, $location, userStatusService, appFactory){
    
    $scope.signin = function(){
        userStatusService.login();
        $location.path( appFactory.AFTER_LOGIN );
    };
    
});

app.controller('ProductsCtrl', function($scope, $rootScope, productsService, productCategoryService) {
    $scope.greeting = 'Products Page';    
    $rootScope.main = 'Some Value';
    
    /*
     *  Product Category Callbacks     
     */
    this.productCategorySuccess = function(data){
        $scope.category = data.data;        
    };    
    productCategoryService.load().then( this.productCategorySuccess );
    
    /*
     *  Product Callbacks
     */
    this.productSuccess = function(data){
        $scope.data = data.data;        
    };
    this.productError = function(data){        
        $scope.data = [];
    };
    
    productsService.data = {test: true};
    productsService.load().then(this.productSuccess, this.productError());
    
});

app.controller('topbarCtrl', function($scope, $rootScope, $location, userStatusService, appFactory){
    $scope.userName = 'Yeasin Hossain';
    $scope.isLoggedIn = userStatusService.getStatus();    
    
    $rootScope.$watch('isLoggedIn', function() {
       $scope.isLoggedIn = userStatusService.getStatus();    
    });
    $scope.logout = function(){
        userStatusService.logout();
        $scope.isLoggedIn = userStatusService.getStatus();
        $location.path( appFactory.AFTER_LOGOUT );
    };
});

app.controller('sidebarCtrl', function($scope, $location){
    
    $scope.menuItems = [
        {id: 1, label: 'Google', 'href': 'http://google.com'},
        {id: 2, label: 'Menu Yahoo', 'href': 'http://yahoo.com'},
        {id: 3, label: 'Baidu', 'href': 'http://baidu.com'}
    ];
    
    $scope.msg = function(item){
        $location.path( item.path );
        console.log( item );
    };
    
});