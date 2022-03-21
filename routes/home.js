const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('home');
})
router.get('/theme', function (req, res, next) {
  if (global.theme == '/sable.css') {
    global.theme = '/crystal.css';
    console.log('changed to crystal theme')
  } else {
    global.theme = '/sable.css';
    console.log('changed to sable theme')
  }
  res.render('home')
})
module.exports = router