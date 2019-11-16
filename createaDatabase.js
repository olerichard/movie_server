const sql = require('sqlite3').verbose();
var fs = require("fs")

const db = new sql.Database('./movieDatabase.db', sql.OPEN_READWRITE | sql.OPEN_CREATE, (err) => {
  if (err)
    return console.log(err.message);
})

db.close()