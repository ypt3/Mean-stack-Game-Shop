var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
  name: String,
  imageURL: String,
  description: String,
  stock: Number,
  created_at: {type: Date, default: Date.now}
});
ProductSchema.path('name').required(true, 'Name cannot be empty');
ProductSchema.path('stock').required(true, 'Stock cannot be empty');
ProductSchema.path('stock').validate(function(v){
  return v > 0;
}, 'Stock must be greater than 0');

var Product = mongoose.model('Product', ProductSchema);
