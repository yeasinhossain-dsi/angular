app.controller('HomeCtrl', function($scope) {
    $scope.greeting = 'Welcome homes';
});

app.controller('SigninCtrl', function($scope, $location, userStatusService, appFactory) {

    $scope.signin = function() {
        userStatusService.login();
        $location.path(appFactory.AFTER_LOGIN);
    };

});

app.controller('ProductsCtrl', function($scope, $rootScope, productsService, productCategoryService) {
    $scope.greeting = 'Products Page';
    $rootScope.main = 'Some Value';

    /*
     *  Product Category Callbacks     
     */
    this.productCategorySuccess = function(data) {
        $scope.category = data.data;
    };
    productCategoryService.load().then(this.productCategorySuccess);

    /*
     *  Product Callbacks
     */
    this.productSuccess = function(data) {
        $scope.data = data.data;
    };
    this.productError = function(data) {
        $scope.data = [];
    };

    productsService.data = {test: true};
    productsService.load().then(this.productSuccess, this.productError());

});

app.controller('ContactUsCtrl', function($scope, contactUsService) {
    var that = this;
    $scope.alerts = [];

    this.success = function() {
        //  success message
        var alert = {
            type: 'success',
            msg: 'Thank you for contacting with us.'
        };
        $scope.alerts.push(alert);
        
        //  Error message
        alert = {
            type: 'danger',
            msg: 'Thank you for contacting with us.'
        };
        $scope.alerts.push(alert);
        
        //  info message
        alert = {
            type: 'info',
            msg: 'Thank you for contacting with us.'
        };
        $scope.alerts.push(alert);
    }
    /*
     *  Actions
     */
    $scope.send = function(form) {
        if (form.$valid) {
            contactUsService.data = $scope.contact;
            contactUsService.send().then(that.success());
        }

    }

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
})

app.controller('ProductCtrl', function($scope, $routeParams) {
    $scope.id = $routeParams.id;
})

app.controller('topbarCtrl', function($scope, $rootScope, $location, userStatusService, appFactory) {
    $scope.userName = 'Yeasin Hossain';
    $scope.isLoggedIn = userStatusService.getStatus();

    //  Actions
    $scope.logout = function() {
        userStatusService.logout();
        $location.path(appFactory.AFTER_LOGOUT);
    };

    //  Events
    $rootScope.$on(appFactory.LOGIN_EVENT, function() {
        $scope.isLoggedIn = userStatusService.getStatus();
    });
    $rootScope.$on(appFactory.LOGOUT_EVENT, function() {
        $scope.isLoggedIn = userStatusService.getStatus();
    });

});

app.controller('sidebarCtrl', function($scope, $rootScope, $location) {

    $scope.menuItems = [
        {id: 1, label: 'Google', 'href': 'http://google.com'},
        {id: 2, label: 'Menu Yahoo', 'href': 'http://yahoo.com'},
        {id: 3, label: 'Baidu', 'href': 'http://baidu.com'}
    ];

    $scope.msg = function(item) {
        console.log(item);
    };

});