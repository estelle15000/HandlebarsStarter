const express = require('express')
const router = express.Router()
const webservices = require("../webservices/webservices.js")
const middleware = require("../middleware/middleware.js")

router.get('/', middleware.requiresAuth, async  function (req, res, next) {
  var artists = await webservices.readAll("Artist")
  res.render('list',{"artists":artists})
})

module.exports = router