'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    created_date: {
        type: Date,
        default: Date.now
    },
    uid: {
        type: String,
        required: 'Please provide the uid'
    },
    email: {
        type: String,
        required: 'Please provide email'
    },
    photo_url: {
        type: String,
        required: 'Please provide photo URL'
    },
    display_name: {
        type: String,
        required: 'Please provide display name'
    },
    has_voted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', UserSchema);