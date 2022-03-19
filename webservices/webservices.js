/* ------------------------------ SQLITE JSON TO SQL CRUD GENERIC QUERIES - EXPERIMENTAL ----------------------*/
// More informations : https://www.sqlitetutorial.net/sqlite-nodejs/connect/
/* ---------------------------------------------------------------------------------*/
const sqlite3 = require('sqlite3').verbose();
const config = require("../config.json");
/*
* Db connection
* @params 
* @return 
* @error  
*/
let db = new sqlite3.Database('db/' + config.database.sqlite.db_name, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the database.');
    }
});
/*
* CREATE 
* A SQL ROW FROM A JSON OBJECT
* @params table name (STRING) , json (JSON OBJECT)
* @return 
* @error  
* HowToUse : webservices.create("Templates",{'name':'myTemplate','desc':'myDesc','category':'1','created':'12/12/2022'})
*/
function create(table, json) {


    var values = JsonToSqlCreationValues(json);

    const query = "insert into " + table + "  values (" + values + ")";

    db.run(query, function (err) {
        if (err) {
            return console.log(err.message);
        }
        // get the last insert id
        console.log(`A row has been inserted with rowid ${this.lastID}`);
    });
    // close the database connection
    // db.close();
}
/*
* READ 
* ROW 
* @params table name (STRING) , id (INT)
* @return 
* @error  
*/
function read(table, id) {
}
/*
* READ ALL 
* ROWS 
* @params  table name (STRING) 
* @return 
* @error  
*/
async function readAll(table) {

    let sql = 'SELECT * FROM ' + table;
    return new Promise(function (resolve, reject) {
        db.serialize(function () {
            db.all(sql, [], (err, rows) => {
                if (err) { return reject(err); }
                resolve(rows);
            });
        });
    });

    // close the database connection
    // db.close();
}
/*
* UPDATE 
* ROW FROM JSON
* @params table name (STRING) , json (JSON OBJECT)
* @return 
* @error  
* Update example : webservices.update("templates",{"id":1,'name':'test4','desc':'test','category':'1','created':'12/12/2022'})
*/
function update(table, json) {
    // CONVERTS JSON to SQLITE values
    var values = JsonToSqlUpdateValues(json);
    const stmt = db.prepare('UPDATE ' + table + ' SET ' + values + ' WHERE id =' + json.id);
    stmt.run();
}
/*
* DELETE 
* ROW 
* @params table name (STRING) , id (INT)
* @return 
* @error  
*/
function del(table, id) {
}



// Helpers : 
/*
*  CONVERTS JSON to SQLITE CREATION values
* @params Json
* @return 
* @error  
*/
function JsonToSqlCreationValues(json) {
    var values = "NULL";
    for (var key in json) {
        if (json.hasOwnProperty(key)) {
            var val = json[key];
            console.log(val);
            values += ',"' + val + '"'
        }
    }
    return values
}
/*
*  CONVERTS JSON to SQLITE UPDATE values
* @params Json
* @return 
* @error  
*/
function JsonToSqlUpdateValues(json) {
    var values = "";
    var length = Object.keys(json).length;
    var count = 0;
    for (var key in json) {
        if (json.hasOwnProperty(key)) {
            var val = json[key];
            count++;
            if (count < length) {
                values += ' ' + key + ' = "' + val + '",'
            } else {
                values += ' ' + key + ' = "' + val + '"'
            }
        }
    }
    return values
}
module.exports = { create, read, readAll, update, del }