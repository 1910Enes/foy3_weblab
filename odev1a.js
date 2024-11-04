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

  // Employee tablosuna veri ekleme sorgusu
  const employees = [
    [1, 'Ken', 'Sanchez', 'Executive'],
    [2, 'Terri', 'Duffy', 'Engineering'],
    [3, 'Roberto', 'Tamburello', 'Engineering'],
    [4, 'Rob', 'Walters', 'Engineering'],
    [5, 'Gail', 'Erickson', 'Engineering'],
    [6, 'Jossif', 'Goldberg', 'Engineering'],
    [7, 'Dylan', 'Miller', 'Support'],
    [8, 'Diane', 'Margheim', 'Support'],
    [9, 'Gigi', 'Matthew', 'Support'],
    [10, 'Michael', 'Raheem', 'Support']
  ];

  const sql = "INSERT INTO Employee (EmployeeId, FirstName, LastName, DepartmentName) VALUES ?";
  
  con.query(sql, [employees], function (err, result) {
    if (err) throw err;
    console.log("Records inserted: " + result.affectedRows);
  });
});
