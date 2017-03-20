/* ==========================================================================
   Task: Build Files
   https://github.com/gulpjs/gulp/tree/4.0
   ========================================================================== */
'use strict';

const gulp = require('gulp');

module.exports = function(options) {

    return function() {
        return gulp.src(options.src, {base: './dev'})
            .pipe(gulp.dest(options.dest));
    };

};
