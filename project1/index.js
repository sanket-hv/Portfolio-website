const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const projectRouter = require('./routes/ProjectRouter');
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

const port = 3000;
app.use(express.static('public'));
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.render('index', { projects });
})

app.use('/project', projectRouter);
app.get('/aboutus', (req, res) => {
    res.render('about');
})

app.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}/`);
})