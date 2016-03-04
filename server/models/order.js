var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrderSchema = new mongoose.Schema({
  customer_id: {type: Schema.Types.ObjectId, ref: 'Customer'},
  product_id: {type: Schema.Types.ObjectId, ref: 'Product'},
  quantity: Number,
  created_at: {type: Date, default: Date.now}
});
OrderSchema.path('customer_id').required(true, 'Customer ID cannot be empty');
OrderSchema.path('product_id').required(true, 'Product ID cannot be empty');
OrderSchema.path('quantity').required(true, 'Quantity cannot be empty');
OrderSchema.path('quantity').validate(function(v){
  return v > 0;
}, 'Quantity must be greater than 0');

var deepPopulate = require('mongoose-deep-populate')(mongoose);
OrderSchema.plugin(deepPopulate);

var Order = mongoose.model('Order', OrderSchema);
