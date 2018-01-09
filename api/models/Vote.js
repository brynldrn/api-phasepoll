'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VoteSchema = new Schema({
    created_date: {
        type: Date,
        default: Date.now
    },
    creator: {
        type: String,
        required: 'Please provide the sender of this submission'
    },
    voted_entry: {
        type: String,
        required: 'Please cast your vote!'
    }
});

module.exports = mongoose.model('Vote', VoteSchema);