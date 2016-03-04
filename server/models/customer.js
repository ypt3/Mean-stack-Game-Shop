var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CustomerSchema = new mongoose.Schema({
  name: String,
  orders: [{type: Schema.Types.ObjectId, ref: 'Order'}],
  created_at: {type: Date, default: Date.now}
});
CustomerSchema.path('name').required(true, 'Name cannot be empty');
CustomerSchema.path('name').validate(function(v){
  return v.length > 1;
}, 'Name must be longer than 1 character');

var Customer = mongoose.model('Customer', CustomerSchema);
