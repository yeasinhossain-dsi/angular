var app=angular.module("myApp",["ngRoute"]);app.config(function(a,b){a.interceptors.push("globalRequestInterceptor"),b.when("/",{controller:"HomeCtrl",templateUrl:"templates/home.html"}).when("/products",{controller:"ProductsCtrl",templateUrl:"templates/products.html"}).otherwise({redirectTo:"/"})}),app.controller("HomeCtrl",function(a){a.greeting="Home Page"}),app.controller("ProductsCtrl",function(a,b,c,d){a.greeting="Products Page",b.main="Some Value",this.productSuccess=function(b){a.category=b.data},this.productError=function(a){console.log(a)},d.load().then(this.productSuccess),this.productSuccess=function(b){a.data=b.data},this.productError=function(a){console.log(a)},c.data={test:!0},c.load().then(this.productSuccess,this.productError)}),app.controller("sidebar",function(a){a.menuItems=[{id:1,label:"Menu 1",href:"http://google.com"},{id:2,label:"Menu 2",href:"http://yahoo.com"},{id:3,label:"Menu 3",href:"http://baidu.com"}],a.msg=function(a){console.log(a)}}),app.directive("sideBar",function(){return{restrict:"A",templateUrl:"templates/directives/sidebar.html"}});