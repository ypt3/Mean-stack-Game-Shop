angular.module('myApp')
.factory('ProductFactory', ['$http', function($http){
  var factory = {};
  factory.all = function(callback){
    $http.get('/products').then(function(response){
      callback(response.data);
    }, function(error) {
      throw error;
    });
  }
  factory.add = function(new_product, callback){
    console.log(new_product);
    $http.post('/add/product', new_product).then(function(response){
      callback();
    }, function(error){
      throw error;
    });
  }
  return factory;
}]);
