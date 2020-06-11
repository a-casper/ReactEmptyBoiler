const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hackreactor',
  database: 'todos'
});

db.connect((err) => {
  if(err) {
    console.log('Error connecting to the db');
  } else {
    console.log('Connected to the database!');
  }
});

module.exports = db;

