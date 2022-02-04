const PORT = process.env.PORT || 3001;
const express = require("express");
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const pino = require('express-pino-logger');
app.use(pino());

const cors = require('cors');
app.use(cors());

const studentDetails = { 'username': 'bryan', 'password': '0000' }
const lecturerDetails = { 'username': 'nzube', 'password': '1234' }
const candidateDetails = { 'key': 'bryan0554' }

app.post('/', (req, res) => {
    if (req.body.username == studentDetails.username && req.body.password == studentDetails.password) {
        res.send(JSON.stringify('student'));
    }
    else if (req.body.username == lecturerDetails.username && req.body.password == lecturerDetails.password) {
        res.send(JSON.stringify('lecturer'));
    }
    else {
        res.send(JSON.stringify('fail'));
    }
});

app.post('/api/employer', (req, res) => {
    console.log(req.body.key);
    if (req.body.key == candidateDetails.key) {
        res.redirect('/student');
    }
    else {
        res.send(JSON.stringify('fail'));
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);

});