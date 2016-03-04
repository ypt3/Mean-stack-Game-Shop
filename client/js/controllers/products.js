angular.module('myApp')
.controller('ProductController', ['$scope', 'ProductFactory', function($scope, ProductFactory){
  ProductFactory.all(function(data){
    $scope.products = data;
  });
  $scope.add = function() {
    ProductFactory.add($scope.new_product, function(){
      ProductFactory.all(function(data){
        $scope.products = data;
      });
      $scope.new_product = {};
    });
  };
}]);
