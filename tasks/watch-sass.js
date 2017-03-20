/* ==========================================================================
   Task: Watch SASS
   https://github.com/gulpjs/gulp/tree/4.0
   ========================================================================== */
'use strict';

const gulp = require('gulp');

module.exports = function(options) {

    return function() {
        gulp.watch(options.watch, gulp.parallel('sass'))
    };

};
