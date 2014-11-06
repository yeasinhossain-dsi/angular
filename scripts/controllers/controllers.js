app.controller('HomeCtrl', function($scope) {
    $scope.greeting = 'Home Page';
});

app.controller('ProductsCtrl', function($scope, productsService) {
    $scope.greeting = 'Products Page';
    
    productsService.then(function(data){
        $scope.data = data.data;
        console.log( data );
    });

    
});