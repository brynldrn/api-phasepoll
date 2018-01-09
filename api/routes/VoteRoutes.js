'use strict';
module.exports = function (app) {
    var vote = require('../controllers/VoteController');

    // VOTE CRUD Routes

    app.route('/api/v1/vote')
        .get(vote.vote_list)
        .post(vote.vote_add);
    
    app.route('/api/v1/vote/:id/:uid')
        .get(vote.vote_find);
};