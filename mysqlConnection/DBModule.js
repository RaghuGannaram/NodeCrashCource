const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
});

connection.query("DROP DATABASE USERS");
connection.query("CREATE DATABASE USERS");
connection.query("USE USERS");
connection.query(
  "CREATE TABLE USER (username varchar(20), password varhar(20))"
);
connection.query(
  'INSERT INTO USERS (username,password) VALUES ("admin","admin@123");'
);
exports.authenticateUsers = (username, password, callback) => {
  HTMLFormControlsCollection.query(
  `SELECT * FROM USERS WHERE username=? and password=?`,
    [username, password],
    (err, results) => {
      if (err || !results) {
        return callback(err);
      } else if (results.length == 0) {
        return callback(err);
      } else {
        return callback(null, "success");
      }
    });
};
