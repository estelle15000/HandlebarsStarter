const express = require('express');
const router = express.Router();
const multer = require("multer");
const config = require("../config.json")
const middleware = require("../middleware/middleware.js");
/* ********************************* MULTER MULTIPLE FILES UPLOADS FILE HANDLINGS ***************** */
// If we permit multiples uploads  then we have to use MULTER to add a date to each of the filenames, avoiding any duplicate .
var storageFiles = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,config.node_files_path); // nodeFilePath to store our files . Le chemin ou on enregistre nos fichiers.
    },
    filename: function (req, file, cb) {
        let extension = file.originalname.substring(file.originalname.lastIndexOf("."), file.originalname.length);
        let filename = file.originalname
            .split(".")
            .slice(0, -1)
            .join(".");
        cb(null, filename + "-" + Date.now() + extension); // A date will guarantee our filename to be unique. , Ajouter la date gaurantit l'unicité du fichier, aucun doublon possible
    },
});
var uploadFiles = multer({ storage: storageFiles });
/* ************************************* ROUTES ****************************************************** */
router.get('/', middleware.requiresAuth, function (req, res, next) {
    res.render('upload', { message: "Please upload files." })
})
router.post("/upload", middleware.requiresAuth, uploadFiles.array("uploadedFiles", 10), function (req, res, next) {
    res.render('upload', { message: "Upload to server done ." })
});
module.exports = router
