const express = require('express')
const app = express();
const router = express.Router();
const fs = require('fs');

let rawdata = fs.readFileSync('./data.json', (err, contents) => {
    if (err) {
        return "Not parsed";
    }
    else {
        return contents;
    }

});
let projects = JSON.parse(rawdata);
console.log(projects['projects'][0].project_id);

router.get('/:id', (req, res) => {
    var id = req.params.id;
    // console.log(id);
    for (i = 0; i < projects['projects'].length; i++) {
        if(id == projects['projects'][i].project_id)
        {
            var data = projects['projects'][i];
            // console.log(projects['projects'][i])
            res.render('project',{data})
            break;
        }
    }
})

module.exports = router;

