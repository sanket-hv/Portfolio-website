"use strict";

var express = require('express');

var app = express();
var router = express.Router();

var fs = require('fs');

var rawdata = fs.readFileSync('./data.json', function (err, contents) {
  if (err) {
    return "Not parsed";
  } else {
    return contents;
  }
});
var projects = JSON.parse(rawdata);
console.log(projects['projects'][0].project_id);
router.get('/:id', function (req, res) {
  var id = req.params.id; // console.log(id);

  for (i = 0; i < projects['projects'].length; i++) {
    if (id == projects['projects'][i].project_id) {
      var data = projects['projects'][i]; // console.log(projects['projects'][i])

      res.render('project', {
        data: data
      });
      break;
    }
  }
});
module.exports = router;