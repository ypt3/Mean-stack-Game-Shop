angular.module('myApp')
.controller('CustomerController', ['$scope', 'CustomerFactory', function($scope, CustomerFactory){
  CustomerFactory.all(function(data){
    $scope.customers = data;
  });
  $scope.add = function() {
    CustomerFactory.add($scope.new_customer, function(){
      CustomerFactory.all(function(data){
        $scope.customers = data;
      });
      $scope.new_customer = {};
    });
  }
  $scope.remove = function(data) {
    CustomerFactory.remove(data, function(){
      $scope.customers.splice($scope.customers.indexOf(data), 1);
    });
  }
}]);
