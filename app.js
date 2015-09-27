var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var roomates = [], tasks = [], charges = [], chores = [];

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

app.delete('/roomates', function (req, res) {
	var index = 0;
	var found = false;
    console.log(req.body);
	for (; index < roomates.length; index++)
	{
        console.log("loop ID" + roomates[index].ID + " " + req.body.ID);
		if (roomates[index].ID === req.body.ID)
		{
			found = true;
            break;
		}
	}
	if (found)
	{
		roomates.splice(index, 1);
		res.send ("removed entry");
	}
	else
	{
		res.send ("no matching entry");
	}
});

//tasks//
app.get('/tasks', function(req, res) {
    res.send(tasks);
});

app.post('/tasks', function (req, res) {
    tasks.push(req.body);
    res.send("added");
});

app.delete('/tasks', function (req, res) {
	index = tasks.indexOf (req.body);
	if (index != -1)
	{
		res.send ("removed entry");
		tasks.splice(index, 1);
	}
	else
	{
		res.send ("no matching entry");
	}
});

//charges//
app.get('/charges', function(req, res) {
    res.send(charges);
});

app.post('/charges', function (req, res) {
    charges.push(req.body);
    res.send("added");
});

app.delete('/charges', function (req, res) {
	index = charges.indexOf (req.body);
	if (index != -1)
	{
		res.send ("removed entry");
		charges.splice(index, 1);
	}
	else
	{
		res.send ("no matching entry");
	}
});

//chores//
app.get('/chores', function(req, res) {
	res.send(chores);
});

app.post('/chores', function(req, res) {
	chores.push(req.body);
	res.send("added");
});

app.delete('/chores', function (req, res) {
	index = chores.indexOf (req.body);
	if (index != -1)
	{
		res.send ("removed entry");
		chores.splice(index, 1);
	}
	else
	{
		res.send ("no matching entry");
	}
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
