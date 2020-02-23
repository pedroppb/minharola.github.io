var mysql = require('mysql');

var con = mysql.createConnection({
  host: "databases.000webhost.com",
  user: "id12687258_pedroppbdb",
  password: "pedroppbdb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
