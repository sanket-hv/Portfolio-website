"use strict";

var express = require('express');

var app = express();

var path = require('path');

var bodyParser = require('body-parser');

var projectRouter = require('./routes/ProjectRouter');

var fs = require('fs');

var rawdata = fs.readFileSync('./data.json', function (err, contents) {
  if (err) {
    return "Not parsed";
  } else {
    return contents;
  }
});
var projects = JSON.parse(rawdata);
var port = 3000;
app.use(express["static"]('public'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('/', function (req, res) {
  res.render('index', {
    projects: projects
  });
});
app.use('/project', projectRouter);
app.get('/aboutus', function (req, res) {
  res.render('about');
});
app.listen(port, function () {
  console.log("Server is running on https://localhost:".concat(port, "/"));
});