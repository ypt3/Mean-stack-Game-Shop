angular.module('myApp', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'partials/dashboard.html',
      controller: 'DashboardController'
    })
    .when('/customers', {
      templateUrl: 'partials/customers.html',
      controller: 'CustomerController'
    })
    .when('/products', {
      templateUrl: 'partials/products.html',
      controller: 'ProductController'
    })
    .when('/orders', {
      templateUrl: 'partials/orders.html',
      controller: 'OrderController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
