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

db.create = (task) => {
  return new Promise((resolve, reject) => {
    db.query(`INSERT INTO todoList (task) VALUES ('${task}')`, (err, result) => {
      if(err) {
        console.log('Failed to insert task', err)
        reject(err)
      } else {
        resolve(result);
      }
    })
  })
}

db.getAll = () => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM todoList`, (err, result) => {
      if(err) {
        console.log('Failed to get tasks', err);
        reject(err);
      } else {
        resolve(result);
      }
    })
  })
}

module.exports = db;

