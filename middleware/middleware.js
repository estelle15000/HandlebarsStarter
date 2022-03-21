const express = require('express')
const router = express.Router()
// -----------------------------------      MIDDLEWARE FUNCTIONS -------------------------------------------
module.exports = {
    /*
    * Authenticate user from Json array , used in LOGIN.JS
    * @params json array , json object
    * @return true
    * @error  false
    */
    authenticateUser(list, criteria) {
        var result = list.filter(user =>
            Object.keys(criteria).every(key =>
                user[key] == criteria[key]
            )
        );
        if (result.length > 0) {
            return true
        } else {
            return false
        }
    },
    /*
     * CHECKING USER AUTHENTICATION SESSION VARIABLE - FUNCTION USED IN WEB SERVICES  ( EXPRESS ROUTES, SEE LIST.JS FOR EXAMPLE)
     * @params req.session.authenticated
     * @return NEXT()
     * @error  Status 403
     */
    requiresAuth(req, res, next) {
        if (!req.session.authenticated) {
            res.render('error403');
            return;
        } else {
            next(); // continue the process
        }
    },
    /*
     * VALIDATE EMAIL
     * @params email(STRING)
     * @return BOOL
     * @error  
     */
    validateEmail(email){
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }

};