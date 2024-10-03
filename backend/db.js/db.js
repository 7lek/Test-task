const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'SaVeR*200@',
  database: 'expenses_db',
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to database');
});

module.exports = db;