var express = require('express')
var cors = require('cors')
const mysql = require('mysql2');
require('dotenv').config()
var app = express()

app.use(cors())

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
});


const sql = 'SELECT * FROM `users`';


app.get('/hello', function (req, res, next) {
  res.json({msg: 'helloworld'})
})

app.get('/users', function (req, res, next) {
  connection.query(
    sql,
    function (err, results, fields) {
      res.json(results)
    }
  );
  // res.json({msg: 'users'})
})

app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000')
})