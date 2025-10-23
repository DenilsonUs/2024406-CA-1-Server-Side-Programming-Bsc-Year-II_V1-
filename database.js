var mysql = require("mysql2");

// Create the connection to the MySQL database
var connection = mysql.createConnection({
  host: "localhost", // MySQL server location
  user: "root", // your MySQL username
  password: "lopez2424", // your MySQL password (leave empty if none)
  database: "user_form_db", // name of your database
});

// Export this connection so it can be used in server.js
module.exports = connection;
