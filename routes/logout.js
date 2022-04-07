const express = require('express')
const router = express.Router()
const middleware = require("../middleware/middleware.js");
router.get('/', function (req, res, next) {
    // -------------------------------
    // DESTROY NODE SERVER SESSION (NO JWT TOKEN)
    // ------------------------------- 
    req.session.authenticated = false;
    // -------------------------------
    // SWITCH LOG IN TO LOG OUT IN NAVBAR 
    // ------------------------------- 
    global.auth = false;
    // -------------------------------
    // REDIRECT TO HOME 
    // ------------------------------- 
    res.redirect('../home');
})
module.exports = router
