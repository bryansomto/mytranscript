const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require('body-parser');

const loginDetails = {'username': 'bryan', 'password': '0000'}

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.get('./', function(req, res){
//     if (req.query.username == loginDetails.username) {
//         console.log('success');
//     }
//     else {
//         console.log('fail');
//     }
// });

app.post("/api", (req, res) => {
    // console.log(req.body);
    if (req.body.username == loginDetails.username) {
        // return res.redirect("/student");
        console.log('success')
    }
    else {
        console.log('fail');
        // return res.send('Invalid login details');
        // return res.json({error: 'Invalid login details'})
        // req.body.status.innerHTML = 'Invalid login details';
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});