// ------------------------------------
// Mailer infos  https://www.w3schools.com/nodejs/nodejs_email.asp
// ------------------------------------
const nodemailer = require('nodemailer');
const config = require("../config.json");
// ----------------------------------- MAILER FUNCTIONS -------------------------------------------
module.exports = {
    /*
    * Send Mail
    * @params STRING,STRING,STRING,STRING
    * @return true
    * @error  false
    */
    sendMail(from,to,subject,text) {

        var transporter = nodemailer.createTransport({
            service: config.nodemailer.service,
            auth: {
                user: config.nodemailer.auth.user,
                pass: config.nodemailer.auth.pass
            }
        });
        var mailOptions = {
            from: from,
            to: to,
            subject: subject,
            text: text 
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                return false;
            } else {
                console.log('Email sent: ' + info.response);
                return true;
            }
        });
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