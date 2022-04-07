const express = require('express')
const router = express.Router()
const sqliteCrud = require("../crud/sqlite.js")
const middleware = require("../middleware/middleware.js")

router.get('/', middleware.requiresAuth, async function (req, res, next) {
    res.render('crud', { "message": "Waiting for entry." })
})

router.post('/', middleware.requiresAuth, function (req, res, next) {
    //Grab the request body
    var body = req.body;
    var create = sqliteCrud.create("Artist", { 'name': body.name });
    if (create) {
        res.render('crud', { "message": "Ok ." })
    } else {
        res.render('crud', { "message": "Db Problem ." })
    }
})

module.exports = router