const express = require('express')
const router = express.Router()
const users = require('../users/users.json');
const middleware = require("../middleware/middleware.js");
router.get('/', function (req, res, next) {
  res.render('login', { message: "Waiting for login . Starter : please use username:william and password:password" })
})
router.post('/', function (req, res) {

  //Grab the request body
  var body = req.body;

  // Authenting from json Array file users/users.json
  var auth = middleware.authenticateUser(users, { "username": body.username, "password": body.password });
  
  if (auth) {
    // -------------------------------
    // CREATE NODE SERVER SESSION (NO JWT TOKEN) 
    // ------------------------------- 
    req.session.authenticated = true;
    // -------------------------------
    // SWITCH LOG IN TO LOG OUT IN NAVBAR 
    // ------------------------------- 
    global.auth = true;
    // -------------------------------
    // REDIRECT TO HOME
    // ------------------------------- 
    res.redirect('../home');
  } else {
    req.session.auth = false;
    res.render('login',{ message: "Waiting for login . Starter : please use username:william and password:password" });
  }
})
module.exports = router
