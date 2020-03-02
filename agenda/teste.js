var mysql = require('mysql');

var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "RI4FkoJefk",
  password: "m1DitZXPuU"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
