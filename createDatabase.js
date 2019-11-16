const sql = require('sqlite3').verbose();
var sys = require('sys')

const db = new sql.Database('./movieDatabase.db', sql.OPEN_READWRITE | sql.OPEN_CREATE, (err) => {
  if (err)
    return console.log(err.message);
})

var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }

exec("sqlite3 movieDatabase.db < database.sql", puts);