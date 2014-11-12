app.routes = {
    '/': {
        controller: 'HomeCtrl',
        templateUrl: 'templates/home.html',        
    },
    '/products': {
        controller: 'ProductsCtrl',
        templateUrl: 'templates/products.html',
        //requireLogin: true
    },
    '/about': {
        templateUrl: 'templates/about.html',
    },
    '/login': {
        templateUrl: 'templates/login.html',
    }
};