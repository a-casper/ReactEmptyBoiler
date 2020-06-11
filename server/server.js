








const express = require('express');
const path = require('path');
const db = require('../db/querys.js');
const port = 5555;
const app = express();

//middleware
app.use(express.urlencoded( { extended: true } ));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

//paths
app.get('/getAll', (req,res) => {
  db.getAll().then(results => {
    res.status(200).send(results)
  }).catch(err => {
    res.sendStatus(500);
  })
});

app.post('/submitTodo', (req, res) => {
  db.create(req.body.task).then(result => {
    res.status(200).send(result);
  }).catch(err => {
    res.sendStatus(500)
  })
});

//listen
app.listen(port, () => {
  console.log(`Express is listening on port ${port}`);
})