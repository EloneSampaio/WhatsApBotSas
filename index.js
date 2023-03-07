const express = require('express');
const { database } = require('firebase-admin');
const mongoose = require('mongoose');
const db=require('./database/db.js')
const routes = require('./routes/routes.js');
var bodyParser = require('body-parser'); 

 require('./routes/index.js');


var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.use('/api', routes)
