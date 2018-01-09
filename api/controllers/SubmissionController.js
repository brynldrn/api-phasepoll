'use strict';

var mongoose = require('mongoose'),
    Submission = mongoose.model('Submission');

// Get all items
exports.submission_list = function (req, res) {
    Submission.find({}, function (error, task) {
        if(error) {
            res.send(error);
        }
        res.json(task);
    }).sort({created_date: -1});
};

// Add a new item
exports.submission_add = function (req, res) {
    var new_submission = new Submission(req.body);
    new_submission.save(function (error, task) {
        if (error) {
            res.send(error);
        }
        res.json(task);
    });
};