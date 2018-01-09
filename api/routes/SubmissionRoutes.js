'use strict';
module.exports = function (app) {
    var submission = require('../controllers/SubmissionController');

    // Submission CRUD Routes

    app.route('/api/v1/submissions')
        .get(submission.submission_list)
        .post(submission.submission_add);
};