'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SubmissionSchema = new Schema({
    created_date: {
        type: Date,
        default: Date.now
    },
    catch_phrase: {
        type: String,
        required: 'Please provide the catch phrase',
    },
    vote_count: {
        type: Number,
        default: 0
    },
    creator: {
        type: String,
        required: 'Please provide the sender of this submission'
    }
});

module.exports = mongoose.model('Submission', SubmissionSchema);