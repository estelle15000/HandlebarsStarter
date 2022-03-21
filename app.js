// -------------------------------
// LOAD NECESSARY LIBS - CHARGER LES LIBRAIRIES NECESSAIRES
// ------------------------------- 
const express = require('express')
const hbs = require("hbs") // Handlebars framework
const cors = require('cors') // Cors front end access
const session = require("express-session") // Node.js sessions ( No JWT)
const fs = require('fs') // File system management
const bodyParser = require('body-parser')

// ------------------------------- 
// LOAD APP CONFIG - ( DATABASE TOKENS , FTP TOKEN, CLOUDINARY TOKEN, MONGODB TOKEN, etc ...) - CHARGER LA CONFIGURATION DE L'APPLICAITON NODE.JS
// -------------------------------
const config = require("./config.json")

// -------------------------------
// START APP
// ------------------------------- 
const app = express()

// -------------------------------
// PORT
// -------------------------------    
const port = process.env.PORT || 5000  // needed for heroku : https://stackoverflow.com/questions/28706180/setting-the-port-for-node-js-server-on-heroku

// -------------------------------
// USERS NODE SESSIONS - SESSIONS UTILISATEURS
// -------------------------------             
app.use(session({ secret: "ssshhhhh", saveUninitialized: true, resave: true }))


// -------------------------------
// POSTS QUERIES NEEDS THIS
// -------------------------------    
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// -------------------------------
// CORS - ON DECLARE UTILISER CORS
// -------------------------------   
app.use(cors())

// -------------------------------
// SETTING HANDLEBARS VIEW ENGINE AND VIEWS DIRECTORY, ON CHOISIT LE MOTEUR DE TEMPLATES et INDIQUE LE REPERTOIRE QUI CONTIENT  LES VUES HBS
// -------------------------------    
app.set('view engine', 'hbs')
app.set('views', './views')

// -------------------------------
// USING HANDLEBARS HTML PARTIALS -> SET DIRECTORY - ON DECLARE LE REPERTOIRE DES TEMPLATES HTML PARTIELS
// -------------------------------    
hbs.registerPartials(__dirname + "/views/partials")

// -------------------------------
// SWITCH LOG IN TO LOG OUT IN NAVBAR 
// ------------------------------- 
global.auth = false; //this var is only used in the NavBar, for switching from log in to log out menu, his value is modified by login.js

hbs.registerHelper('auth', function() {
  if(global.auth == false){
    return '<a class="nav-link" href="../login">   <i class="bi bi-person-circle"></i>  Login</a>'
  }else{
    return '<a class="nav-link" href="../logout">   <i class="bi bi-person-circle"></i>  Logout</a>'
  }
})

// -------------------------------
// Static images and css directory routes
// -------------------------------    
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/public/images'))
app.use(express.static(__dirname + '/public/css'))
app.use(express.static(__dirname + '/public/themes'))

// -------------------------------
// Classical express routes 
// -------------------------------    
app.use('/home', require('./routes/home'))
app.use('/list', require('./routes/list'))
app.use('/contact', require('./routes/contact'))
app.use('/login', require('./routes/login'))
app.use('/logout', require('./routes/logout'))
app.use('/error403', require('./routes/error403'))

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
