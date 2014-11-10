/*   
 *  Product Category Service
 */
app.service('productCategoryService', function($http) {

    this.service = 'api/productCategory';
    this.data = {};
    this.load = function() {
        return $http({
            url: this.service,
            method: 'GET',
            params: this.data,
            nointercept: true
        });
    }
    
    return this;
});

/*
 *  Product Service
 */
app.service('productsService', function($http) {

    this.service = 'api/products';
    this.data = {};
    this.load = function() {
        return $http({
            url: this.service,
            method: 'GET',
            params: this.data,
            nointercept: true
        });
    }
    
    return this;
});