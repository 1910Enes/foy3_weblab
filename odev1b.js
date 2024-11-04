var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "enes1910",
  database: "weblab"
});

con.connect(function(err) {
  if (err) {
    console.error("Connection error: " + err.stack);
    return;
  }
  console.log("Connected!");

  // "Engineering" departmanındaki çalışanları listeleyen sorgu
  const sql = "SELECT * FROM Employee WHERE DepartmentName = 'Engineering'";

  con.query(sql, function (err, results) {
    if (err) {
      console.error("Error fetching employees: " + err.stack);
      return;
    }

    console.log("Engineering Department Employees:");
    results.forEach((employee) => {
      console.log(`EmployeeId: ${employee.EmployeeId}, FirstName: ${employee.FirstName}, LastName: ${employee.LastName}, DepartmentName: ${employee.DepartmentName}`);
    });

    // Bağlantıyı kapatma
    con.end(function(err) {
      if (err) {
        console.error("Error ending the connection: " + err.stack);
      } else {
        console.log("Connection closed.");
      }
    });
  });
});
