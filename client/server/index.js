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

const studentDetails = {'username': 'bryan', 'password': '0000'}
const lecturerDetails = {'username': 'nzube', 'password': '1234'}

// app.get('/api/greeting', (req, res) => {
//     const name = req.query.name || 'World';
//     res.setHeader('Content-Type', 'application/json');
//     res.send(JSON.stringify({ greeting: `Hello ${name}!` }))
// });

app.post('/', (req, res) => {
    // console.log(req.body);
    if (req.body.username == studentDetails.username && req.body.password == studentDetails.password) {
        console.log('success');
        // res.send(JSON.stringify({ greeting: `Hello ${req.body.username}!` }));
        res.send(JSON.stringify('student'));
    }
    else if (req.body.username == lecturerDetails.username && req.body.password == lecturerDetails.password) {
        console.log('success');
        // res.send(JSON.stringify({ greeting: `Hello ${req.body.username}!` }));
        res.send(JSON.stringify('lecturer'));
    }
    else {
        console.log('fail');
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

// app.use(express.static('routes'));

// app.use(pino);
// app.use(cors({ origin: ['http://localhost:3001', 'http://127.0.0.1:3001'], credentials: true }));
// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Headers', true);
//     res.header('Access-Control-Allow-Credentials', 'Content-Type');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     next();
// });