const express = require('express');
const app = express();
const userroute = express.Router();

// User model
let User = require('../models/User');
let admin = require('../services/firebase-service');


// Create User
userroute.route('/createUser').post((req, res, next) => {
    const {
        email,
        phoneNumber,
        password,
        firstName,
        lastName,
      } = req.body;
  
      const user = await admin.auth().createUser({
        email,
        phoneNumber,
        password,
        displayName: `${firstName} ${lastName}`,

      }).then(()=>{

        User.create(req.body, (error, data) => {
            if (error) {
              return next(error)
            } else {
              res.json(data)
              console.log(data)
            }
          })
      })
     .catch(err=>{

        console.log('creating user failed due to'+err)
     })
  });
  
//get all users
userroute.route('/getuserslist').get((req, res) => {
    User.find().then((data)=>{
      res.json(data)
    })
    .catch(err=>{
      return next(err)
    })
  })
  


module.exports = userroute;