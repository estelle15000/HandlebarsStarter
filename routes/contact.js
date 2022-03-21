const express = require('express');
const router = express.Router();
const mailer = require("../mailer/mailer.js");
const config = require("../config.json");


router.get('/', function (req, res, next) {
  res.render('contact', { message: "Waiting for message." })
})
router.post('/', function (req, res) {
  //Grab the request body
  var body = req.body;
  //Validate email
  if (mailer.validateEmail(body.emailAddress)) {

  } else {
    res.render('contact', { message: "Email is not valid." });
    return;
  }

  mailer.sendMail(body.emailAddress, config.nodemailer.auth.user, "New message from app", body.message);
  res.render('contact', { message: "Message sent." })

})

module.exports = router