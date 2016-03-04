angular.module('myApp')
.factory('CustomerFactory', ["$http", function($http){
  var factory = {};
  factory.all = function(callback){
    $http.get('/customers').then(function(response) {
      callback(response.data);
    }, function(error){
      throw error;
    });
  }
  factory.add = function(new_customer, callback){
    $http.post('/add/customer', new_customer).then(function(response){
      callback();
    }, function(error) {
      throw error;
    });
  }
  factory.remove = function(customer, callback){
    $http.post('/remove/customer/' + customer._id).then(function(response){
      callback();
    }, function(error){
      throw error;
    });
  }
  return factory;
}]);
