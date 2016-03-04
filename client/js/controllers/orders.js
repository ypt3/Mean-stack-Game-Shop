angular.module('myApp')
.controller('OrderController', ['$scope', 'OrderFactory', 'ProductFactory', 'CustomerFactory', function($scope, OrderFactory, ProductFactory, CustomerFactory){
  OrderFactory.all(function(data){
    $scope.orders = data;
  });
  ProductFactory.all(function(data){
    $scope.products = data;
  });
  CustomerFactory.all(function(data){
    $scope.customers = data;
  });
  $scope.add = function() {
    OrderFactory.add($scope.new_order, function(){
      OrderFactory.all(function(data){
        $scope.orders = data;
      });
      $scope.new_order = {};
    });
  };
}]);
