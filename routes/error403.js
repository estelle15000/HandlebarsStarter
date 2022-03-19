const express = require('express')
const router = express.Router()
const users = require('../users/users.json');
router.get('/', function (req, res, next) {
  res.render('error403')
})
module.exports = router
