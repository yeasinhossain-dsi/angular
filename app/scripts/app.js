var app = angular.module('myApp', ['ngRoute']);

app.run(function($rootScope, userStatusService){
    $rootScope.$on("$routeChangeStart", function(event, next) {        
        
        //  Security Check for private pages
        var loginRequired = typeof( next.$$route ) === 'undefined' ? false: next.$$route.requireLogin;                
        if( loginRequired && !userStatusService.getStatus() ){
            event.preventDefault();            
            window.location = '#/login';
        }        
        
    });
});

app.config(function($httpProvider, $routeProvider) {

    $httpProvider.interceptors.push('globalRequestInterceptor');

    for( route in app.routes ){
        $routeProvider.when( route, app.routes[route] );
    }
            
    $routeProvider.otherwise({          
        templateUrl: 'templates/404.html'
    });
});