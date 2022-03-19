const express = require('express')
const router = express.Router()
const middleware = require("../middleware/middleware.js");
router.get('/', function (req, res, next) {
    // -------------------------------
    // DESTROY NODE SERVER SESSION (NO JWT TOKEN) - FIVERR
    // ------------------------------- 
    req.session.authenticated = false;
    // -------------------------------
    // SWITCH LOG IN TO LOG OUT IN NAVBAR - FIVERR
    // ------------------------------- 
    global.auth = false;
    // -------------------------------
    // REDIRECT TO HOME - FIVERR
    // ------------------------------- 
    res.redirect('../home');
})
module.exports = router
