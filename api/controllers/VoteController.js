'use strict';

var mongoose = require('mongoose'),
    Vote = mongoose.model('Vote');

// Get all items
exports.vote_list = function (req, res) {
    Vote.find({}, function (error, task) {
        if(error) {
            res.send(error);
        }
        res.json(task);
    }).sort({created_date: -1});
};

// Add a new item
exports.vote_add = function (req, res) {
    var new_vote = new Vote(req.body);
    new_vote.save(function (error, task) {
        if (error) {
            res.send(error);
        }
        res.json(task);
    });
};

exports.vote_find = function (req, res) {
    Vote.find({ $and: [ {voted_entry: req.params.id}, {creator: req.params.uid} ] }, function (err, res) {
        if (err) {
            res.send(err);
        } else {
            res.json();
        }
    })
}