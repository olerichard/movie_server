const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router')
const cors = require('cors');
const sql = require('sqlite3').verbose();
/*
const db = new sql.Database('./movieDatabase.db', sql.OPEN_READWRITE | sql.OPEN_CREATE, (err) => {
  if (err)
    return console.log(err.message);
})*/


//APP Setup
const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
router(app)

// Server Setup  
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on Port:' + port);


