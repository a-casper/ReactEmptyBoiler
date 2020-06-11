








const express = require('express');
const path = require('path');
const db = require('../db/querys.js');
const port = 5555;

const app = express();

app.use(express.urlencoded( { extended: true } ));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`);
})