const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Order = new Schema({
   Items: {
      type: Array
   },
   TotalAmount: {
      type: Number
   },
   Tax: {
      type: String
   },
   phoneNumber: {
      type: Number
   },
   Email:{
       type: String
   }
}, {
   collection: 'Orders'
})

module.exports = mongoose.model('Order', Order)