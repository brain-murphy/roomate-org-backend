var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var roomates = [], tasks = [], charges = [];

app.get('/', function (req, res) {
});

app.use(bodyParser.json());

//roomates
app.get('/roomates', function (req, res) {
    res.send(roomates);
});

app.post('/roomates', function (req, res) {
    roomates.push(req.body);
    console.log(req.body);
    res.send("added");
});

//tasks//
app.get('/tasks', function(req, res) {
    res.send(tasks);
});

app.post('/tasks', function (req, res) {
    tasks.push(req.body);
    res.send("added");
});

//charges//
app.get('/charges', function(req, res) {
    res.send(charges);
});

app.post('/charges', function (req, res) {
    charges.push(req.body);
    res.send("added");
});

app.use("/", function (req, res) {
  res.send("invalid path");
});




var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
