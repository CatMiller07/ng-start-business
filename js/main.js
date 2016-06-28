var app = angular.module("tutorialWebApp",['ngRoute']);
/*
* Configure the routes
*/
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    //home
    .when("/",{
      templateUrl:"partials/home.html",
      controller:'PageCtrl'
      })
    .when("/about",{
        templateUrl:"partials/about.html",
        controller:'PageCtrl'
      })
    .when("/contact",{
        templateUrl:"partials/contact.html",
        controller:'PageCtrl'
        })
    .when("/faq",{
          templateUrl:"partials/faq.html",
          controller:'PageCtrl'
          })
    .when("/pricing",{
            templateUrl:"partials/pricing.html",
            controller:'PageCtrl'
          })
    .when("/services",{
            templateUrl:"partials/services.html",
            controller:'PageCtrl'
          })
    .when("/404",{
            templateUrl:"partials/404.html"
          })
    .otherwise("/404",{
           redirectTo:"partials/404.html"
    });

}]);

app.controller('PageCtrl', function(){
  console.log("Page Controller reporting for duty.")
    $('.carousel').carousel({
       interval: 5000
    });
    //activates tooltips for Social Links
    $('.tooltip-social').tooltip({
       selector:"a[data-toggle=tooltip]"
    });
});
