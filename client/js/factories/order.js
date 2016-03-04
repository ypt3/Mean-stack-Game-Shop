angular.module('myApp')
.factory('OrderFactory', ['$http', function($http){
  var factory = {};
  factory.all = function(callback){
    $http.get('/orders').then(function(response){
      callback(response.data);
    }, function(error) {
      throw error;
    });
  }
  factory.add = function(new_order, callback) {
    $http.post('/add/order', new_order).then(function(response){
      callback();
    }, function(error) {
      throw error;
    });
  }
  return factory;
}]);
