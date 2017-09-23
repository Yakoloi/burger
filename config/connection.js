var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'c6dv3joci3csa2vg',
    password: 'cmou8g18mli8ffzu',
    database: 'burgers_db'
  });
};

// create the connection information for the sql database
// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,

//     // Your username
//     user: "newuser",

//     // Your password
//     password: "uci123",
//     database: "burgers_db"
// });

// connection.connect(function(err) {
//     if (err) {
//       console.error("error connecting: " + err.stack);
//       return;
//     }
//     console.log("connected as id " + connection.threadId);
//   });

connection.connect();
module.exports = connection;