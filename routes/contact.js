const express = require('express');
const router = express.Router();
const mailer = require("../mailer/mailer.js");
const config = require("../config.json");
const middleware = require("../middleware/middleware.js");

router.get('/', function (req, res, next) {
  res.render('contact', { message: "Waiting for message." })
})
router.post('/', function (req, res) {
  //Grab the request body
  var body = req.body;
  //Validate email
  if (middleware.validateEmail(body.emailAddress)) {

  } else {
    res.render('contact', { message: "Email is not valid." });
    return;
  }

  mailer.sendMail(body.emailAddress, config.nodemailer.auth.user, "New message from app", body.contact_form_message + ' - His Phone : ' + body.contact_form_phone);
  res.render('contact', { message: "Message sent." })

})

module.exports = router