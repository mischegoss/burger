// Inside the `connection.js` file, setup the code to connect Node to MySQL.

// * Export the connection.
var mysql = require('mysql');
require('dotenv').config();

var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'burgers_db'
});

connection.connect(function(err){
    if(err) throw err;
    console.log('connected as id '+ connection.threadId)
});

module.exports = connection;