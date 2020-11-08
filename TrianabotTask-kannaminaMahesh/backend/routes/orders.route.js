const express = require('express');
const app = express();
const ordersRoute = express.Router();

// orders model
let Order = require('../models/Order');

// Get Customer specific Orders 
ordersRoute.route('/getCustomerOrders').get((req, res) => {


    Order.find({"email":req.body.email}).then((data)=>{
    res.json(data)
  })
  .catch(err=>{
    return next(err)
  })


})

//create order
ordersRoute.route('/createOrder').post((req, res, next) => {
    Order.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
        console.log(data)
      }
    })
  });




module.exports = ordersRoute;