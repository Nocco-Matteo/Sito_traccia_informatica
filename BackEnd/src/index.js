const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./events');

const connection = mysql.createConnection({
  host     : '',
  user     : '',
  password : '',
  database : ''
});

connection.connect();

const port = process.env.PORT || 2500;

const app = express().use(cors()).use(bodyParser.json()).use(events(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});