var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "enes1910",
  database: "weblab"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  // "Terri" adlı çalışanın DepartmentName'ini "Executive" olarak güncelleyen sorgu
  const sql = "UPDATE Employee SET DepartmentName = 'Executive' WHERE FirstName = 'Terri'";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Record updated: " + result.affectedRows);
  });
});