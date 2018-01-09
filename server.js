var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Submission = require('./api/models/Submission');
var Vote = require('./api/models/Vote');
var port = process.env.port || 4000;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/phasepoll_db', {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useMongoClient: true
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    if (req.method === "OPTIONS")
        res.sendStatus(200);
    else
        next();
});

var submissionRoutes = require('./api/routes/SubmissionRoutes');
var voteRoutes = require('./api/routes/VoteRoutes');

submissionRoutes(app);
voteRoutes(app);

app.use(function (request, response, next) {
    response.status(404).send({ url: request.originalUrl + ' not found.' });
    response.status(403).send({ url: request.originalUrl + ' access FORBIDDEN.' });
    response.status(500).send({ url: request.originalUrl + ' - Internal Server Error.' });
    response.status(400).send({ url: request.originalUrl + ' - bad request.' });
});

app.listen(port);

console.log('PhasePoll API server started on: ' + port);