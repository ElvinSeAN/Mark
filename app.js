var fs = require('fs');
var SQL = require('sql.js');
var path = require('path');
var filebuffer = fs.readFileSync(path.join(__dirname, 'testDB.db'));
const express = require('express');
const app = express();

function Result(id, first, second, third, fourth, fifth, sixth, seventh) {
    this.id = id;
    this.firstno = first;
    this.secondno = second;
    this.thirdno = third;
    this.fourthno = fourth;
    this.fifthno = fifth;
    this.sixthno = sixth;
    this.specialno = seventh;
}

module.exports = Result;

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/db', function (req, res) {
    res.send(JSON.stringify(allResult));
})

app.listen(3000, function () {
    console.log('listening to port 3000 ready to go !')
})
var allResult = [new Result()];

// Load the db
var db = new SQL.Database(filebuffer);
var rest = db.exec("SELECT `_rowid_`, * FROM record where sixth < 25");
for (var i = 0; i < rest[0].values.length; i++) {
    allResult[i] = new Result(rest[0].values[i][0], rest[0].values[i][1], rest[0].values[i][2], rest[0].values[i][3], rest[0].values[i][4], rest[0].values[i][5], rest[0].values[i][6], rest[0].values[i][7]);
    console.log(allResult[i]);
}

db.close();