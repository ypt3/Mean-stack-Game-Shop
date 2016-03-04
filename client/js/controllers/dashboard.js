angular.module('myApp')
.controller('DashboardController', ['$scope', 'OrderFactory', 'ProductFactory', 'CustomerFactory', function($scope, OrderFactory, ProductFactory, CustomerFactory){
  OrderFactory.all(function(data){
    for (var i = 0; i < data.length; i++) {
      data[i].created_at = moment(data[i].created_at).fromNow();
    }
    $scope.orders = data;
  });
  ProductFactory.all(function(data){
    $scope.products = data;
  });
  CustomerFactory.all(function(data){
    for (var i = 0; i < data.length; i++) {
      data.created_at = moment(data[i].created_at).fromNow();
    }
    $scope.customers = data;
  });
}]);
