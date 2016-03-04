var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
  all: function(req, res){
    Product.find({}, function(err, result){
      if (err) {res.send("cannot find anything because something is wrong...");}
      else res.json(result);
    });
  },
  create: function(req, res){
    new Product(req.body).save(function(err, result){
      if (err) {res.send('cannot add because something is wrong...');}
      else res.send('Added');
    });
  }
};
