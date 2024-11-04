var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "enes1910"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  // 'weblab' veritabanını oluşturun (mevcut değilse)
  con.query("CREATE DATABASE IF NOT EXISTS weblab", function (err, result) {
    if (err) throw err;
    console.log("Database created or already exists");

    // 'weblab' veritabanına geçiş yapın
    con.changeUser({database: 'weblab'}, function(err) {
      if (err) throw err;
      console.log("Switched to weblab database");

      // 'Employee' tablosunu oluşturun
      const sql = `CREATE TABLE IF NOT EXISTS Employee (
            EmployeeId INT PRIMARY KEY,
            FirstName VARCHAR(255),
            LastName VARCHAR(255),
            DepartmentName VARCHAR(255)
        )`;

      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
      });
    });
  });
});
