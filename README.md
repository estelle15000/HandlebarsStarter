

<a href="https://heroku.com/deploy">
  <img  align="right"  src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
</a>
<p align="center" href="https://handlebarsstarter.herokuapp.com/home">
  <img  src="https://github.com/estelle15000/HandlebarsStarter/blob/main/logo2.jpg" >
</p>

<p align="center" href="https://handlebarsstarter.herokuapp.com/home">
<b>HEROKU LIVE DEMO </b> ->  :<a href="https://handlebarsstarter.herokuapp.com/home"> https://handlebarsstarter.herokuapp.com/home</a>
</p>




# Handlebars Node.Js Sqlite 2022 Starter !!BUILDING !!
<img width=80 height = 80 src="https://i.pinimg.com/236x/34/4d/88/344d888c205da2182f8fb030d92585f6.jpg">
<b>English:</b><br>
Hey ! There is my new 2022 simple Full stack Node.js Handlebars starter.
Handlebars is very practical and simplifies Full Stack programming well... No more Vue.js or React.js here, we use Handlebars, which is particularly reactive and allows fast and reliable vanilla JS programming!
This depot won't use global variables stored on heroku, to make sure it works on any computer..<br><br>

<b>Spanish:</b><br>
Oye ! Ahí está mi nuevo arrancador de manillar Node.js de pila completa 2022 simple.Handlebars es muy práctico y simplifica mucho la programación Full Stack...

<b>French:</b><br>
Bonjour, Voici mon nouveau starter simplifié Node.js - Handlebars de 2022.
Handlebars est très pratique et simplifie bien la programmation Full Stack ... Plus de Vue.js ou de React.js ici, on utilise Handlebars, qui est particulièrement réactif et permet une programmation JS vanilla rapide, instantanée et fiable !
Ce dépot n'utilisera pas de variables globales stockées sur heroku , de manière à pouvoir fonctionner sur n'importe quel ordinateur..

<b>German:</b><br>
Hey ! Da ist mein neuer 2022 einfacher Full Stack Node.js Handlebars Starter.Handlebars ist sehr praktisch und vereinfacht die Full Stack Programmierung gut...

## Features :
- Node.js.
- Handlebars framework.
- Express router.
- <b>Session Authentication</b>, <b>Security MiddleWare</b> applied to the express routes system.
- Generic Async CRUD(Create, Read, Update, Delete)  sqlite db queries + Chinook demo Sqlite relational database file.
- Bootstrap 5.
- Multiple files upload.
- Multiple CSS theme switching.
- HandleBars Partials and variables handlings.
- NodeMailer : Email from the app using a Gmail MailBox .


## Demonstration Url and screenshots
<p align="center">
  <img  src="https://github.com/estelle15000/HandlebarsStarter/blob/main/STARTER.jpg">
</p>




<br><br>
<b>Async Query : ReadAll the Chinook Database Artists from the list.js route result : </b><br>

<b>Middleware User Session Control - Express routes - Graphical explanation :</b>
  <img  src="https://github.com/estelle15000/HandlebarsStarter/blob/main/login-explanation.jpg">
  <br><br>

Query All the Artist Table rows: 
<i>var artists = await sqliteCrud.readAll("Artist")</i>

 <img  src="https://github.com/estelle15000/HandlebarsStarter/blob/main/async-list.jpg">
<br><br>
 


<b>Send emails : Send emails from the app ( Fill config.json with you Gmail mailbox before) : </b><br>
<img  src="https://github.com/estelle15000/HandlebarsStarter/blob/main/emails.jpg">




# More informations : 
<img width=80 height = 80 src="https://i.pinimg.com/236x/34/4d/88/344d888c205da2182f8fb030d92585f6.jpg">

<b>English:</b><br>
Simplified and generic implementation of the HandleBars framework:
- A Middleware that secures access to express routes, thanks to Node.js session variables, can't access list.hbs if you ain't authenticated
- A generic CRUD(Create, Read, Update, Delete)  file for the SQLite relational database ( Experimental)
- A Bootstrap 5 library and its media queries
- Asynchronous database queries ( Using Async Await)

<b>Spanish:</b><br>
Implementación simplificada y genérica del marco HandleBars:
- Un Middleware que asegura el acceso del express routes, gracias a las variables de sesión de Node.js
- Un archivo CRUD genérico, a la base de datos relacional SQLite ( Experimental)
- Una biblioteca de Bootstrap 5 y sus consultas de medios.



<b>French:</b><br>
Mise en place simplifiée et générique du framework HandleBars: 
- Un Middleware qui sécurise l'accès aux routes express, grâce aux variables de sessions Node.js, vous ne pouvez pas accéder à list.hbs si vous n'êtes pas authentifié.
- Un Fichier CRUD(Create, Read, Update, Delete)  générique vers la base de données relationelle SQLite ( Experimental).
- Une librairie Bootstrap 5 et ses medias queries.
- Une mise en place effective des partials ( Barre de navigation, chargement des librairies etc ...)
- Requêtes asynchrones sur la database Chinook ( On utilise Async Await)

<b>German : </b><br>
Vereinfachte und generische Implementierung des HandleBars-Frameworks:
- Eine Middleware, die dank Node.js-Sitzungsvariablen den Zugriff sichert
- Eine generische CRUD relationale SQLite-Datenbank
- Eine Bootstrap 5-Bibliothek und ihre Medienabfragen

<b>Russian:</b><br>
Упрощенная и общая реализация фреймворка HandleBars:
- Промежуточное ПО, которое защищает доступ благодаря переменным сеанса Node.js.
- Общий файл веб-служб CRUD для реляционной базы данных SQLite ( Experimental).
- Библиотека Bootstrap 5 и ее медиа-запросы

## What's in files ?

<img width=80 height = 80 src="https://i.pinimg.com/236x/34/4d/88/344d888c205da2182f8fb030d92585f6.jpg">

-   <b>CONFIG.JSON</b> This is the app configuration , db connexion, ftp connexion, choosing dev or prod, etc ...<br>
-   <b>APP.JS</b> This is the node.js server: Includes the node.js params, node session module loading . <br>
- <b>MIDDLEWARE</b> Add theses security functions to the express Routes, like this  : middleware.requiresAuth ( See list.js for example), to allow access to any route only to authenticated users<br>
-   <b>VIEWS</b> : Handlebars HTML views.<br>
-   <b>VIEWS\PARTIALS</b> : Handlebars HTML partials ( Header, Footer, Sidebar ...), header.hbs will load the front end libraries( Bootstrap, Jquery...)<br>
-   <b>TMP</b> : This is a mandatory directory , used for HEROKU files uploads.  <br>
-   <b>FILES</b> : This is where uploaded files are stored, when Heroku is not used.  <br>
-   <b>PUBLIC</b> : There, you will find the STYLE.CSS file, for CSS medias queries, the App themes and the web application Images </b>
-   <b>CRUD</b> : There, you have one experimental generic Async CRUD file, allowing you to send JSON to the SQLITE relational DB. I won't use the Sequelize ORM this time, don't use this in production but use a ORM, I've done it real fast.
-   <b>DB\DATABASE.DB</b> : This is the SQLITE relational database.
-   <b>APP.JSON</b> : Used by "deploy to heroku".
-   <b>MAILER\MAILER.JS</b> : All emailing related functions.
-   <b>USERS\USERS.JSON</b> : This is the users list, I won't use the Database for that in this starter, To simplify all.
## Qu'y a-t-il dans les fichiers ?
- <b>CONFIG.JSON</b> C'est la configuration de l'application, connexion db, connexion ftp, choix dev ou prod, etc ...<br>
- <b>APP.JS</b> Il s'agit du serveur node.js : comprend les paramètres node.js, chargement des modules, démarrage de l'app. <br>
- <b>MIDDLEWARE</b> Ajouter ces fonctions de sécurité aux Routes express, en écrivant ça  : middleware.requiresAuth ( voir list.js par example), pour autoriser l'accès à la route aux utilisateurs identifiés<br>
- <b>VIEWS</b> : Vues HTML Handlebars<br>
- <b>VIEWS\PARTIALS</b> : Partiels HTML Handlebars ( En tête du site, Pied de page, Barre des tâches latérale ...) , Header.hbs charge les librairies front end ( Bootstrap, Jquery...)<br>
- <b>TMP</b> : Il s'agit d'un répertoire obligatoire, utilisé pour les téléchargements de fichiers Heroku. <br>
- <b>FILES</b> : c'est là que les fichiers téléchargés sont stockés, quand on utilise pas héroku. <br>
- <b>PUBLIC</b> : Vous y trouverez le fichier style.css, pour les requêtes médias CSS, les thèmes App et les images de l'application web </b>
-   <b>CRUD</b> : Ici, on trouve le fichier CRUD (Create, Read, Update, Delete) expérimental qui permet de transférer des objets JSON dans la base de données SQLITE, pas d'utilisation de l'ORM Sequelize cette fois, n'utilisez pas cela pour de la production, mais un ORM.
-   <b>DB\DATABASE.DB</b> : C'est la base de données SQLITE
-   <b>MAILER\MAILER.JS</b> : Toutes les fonctions servant à l'emailing.
-   <b>USERS\USERS.JSON</b> : La liste des utilisateurs, je ne me sers pas de la database dans ce starter, pour simplifier.
## ¿Qué hay en los archivos?
- <b>CONFIG.JSON</b> Esta es la configuración de la aplicación, conexión db, conexión ftp, elección dev o prod, etc...<br>
- <b>APP.JS</b> Este es el servidor node.js: incluye los parámetros de node.js, carga del módulo de sesión de nodo. <br>
- <b>VIEWS</b> : Handlebars del manillar.<br>
- <b>VIEWS\PARTIALS</b> : Handlebars parciales (Encabezado, Pie de página, Barra lateral...)<br>
- <b>TMP</b>: este es un directorio obligatorio, utilizado para cargar archivos de Heroku. <br>
- <b>FILES</b> : Aquí es donde se almacenan los archivos cargados. <br>
- <b>PUBLIC</b> : Allí encontrará el archivo style.css, para consultas de medios CSS, los temas de la aplicación y las imágenes de la aplicación web </b>
- <b>CRUD</b>: Aquí encontramos el servicio web experimental CRUD (Crear, Leer, Actualizar, Eliminar) que permite transferir objetos JSON a la base de datos SQLITE, sin usar ORM Sequelize esta vez. Not to usar in production!

## Was ist in Dateien ?
- <b>CONFIG.JSON</b> Dies ist die App-Konfiguration, DB-Verbindung, FTP-Verbindung, Auswahl von dev oder prod, etc ...<br>
- <b>APP.JS</b> Dies ist der node.js-Server: Enthält die node.js-Parameter, das Laden des Knotensitzungsmoduls . <br>
- <b>VIEWS</b> : Handlebars views.<br>
- <b>VIEWS\PARTIALS</b> : Handlebars partials (Kopfzeile, Fußzeile, Seitenleiste ...)<br>
- <b>TMP</b> : Dies ist ein obligatorisches Verzeichnis, das für das Hochladen von Heroku-Dateien verwendet wird. <br>
- <b>FILES</b> : Hier werden hochgeladene Dateien gespeichert. <br>
- <b>PUBLIC</b> : Dort finden Sie die Datei style.css für CSS-Medienabfragen, die App-Designs und die Bilder der Webanwendung </b>
- <b>CRUD</b>: Hier finden wir den experimentellen CRUD-Webdienst (Create, Read, Update, Delete), der es ermöglicht, JSON-Objekte in die SQLITE-Datenbank zu übertragen, diesmal ohne Verwendung des ORM-Sequelizes.Not to usar in production, Utilisar ORM!

## Project setup
<img width=80 height = 80 src="https://i.pinimg.com/236x/34/4d/88/344d888c205da2182f8fb030d92585f6.jpg">

```
# npm install
```
- Clone the depot using smargit or any git tool, then simply install the node modules at the root of the app, using the NPM INSTALL command<br>
- Clonez ce dépot avec Smartgit, puis installez les modules nodes , en tapant NPM INSTALL à la racine de l'application.<br><br>

## Start the application
```
# npm run start
```

