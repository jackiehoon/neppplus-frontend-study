const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "nepp-insta.co4gfm17ihoe.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "12341234",
  database: "todo",
});

connection.connect();

module.exports = connection;
