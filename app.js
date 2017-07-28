var msg = 'Hello World';
console.log(msg);
var fs = require('fs');
var SQL = require('sql.js');
var path = require('path');
var filebuffer = fs.readFileSync(path.join(__dirname, 'testDB.db'));

// Load the db
var db = new SQL.Database(filebuffer);
var res = db.exec("SELECT `_rowid_`, * FROM record where first > 25 LIMIT 10");
for (var i = 0; i< res[0].values.length; i++)
{
console.log(res[0].values[i]);

}




db.close();
