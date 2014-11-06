app.service('productsService', function($http) {

    this.service = 'api/products.php';

    return $http({
        url: this.service,
        method: 'GET'
    });

})