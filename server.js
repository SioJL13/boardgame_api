require('dotenv').config()
var express =  require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.port || 3030;

// Import the routes
var routes = require('./api/routes/boardRoutes');

// start loading models
var BoardGame = require('./api/models/boardModel');
// var db_url = 'mongodb://localhost:27017/boardgames'

// mongoose connection instance
mongoose.Promise = global.Promise
// Connecting to the database
mongoose.connect(process.env.MONGOLAB_URI, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Register the routes
routes(app);
        app.use(function (req, res) {
            res.status(404).send({ url: req.originalUrl + ' not found' })
        });

app.listen(port);

console.log("Board REST running at: " + port);
