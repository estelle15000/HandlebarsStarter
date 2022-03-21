const express = require('express')
const router = express.Router()
const sqliteCrud = require("../crud/sqlite.js")
const middleware = require("../middleware/middleware.js")

router.get('/', middleware.requiresAuth, async  function (req, res, next) {
  var artists = await sqliteCrud.readAll("Artist")
  res.render('list',{"artists":artists})
})

module.exports = router