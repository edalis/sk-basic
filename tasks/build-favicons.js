/* ==========================================================================
   Task: Build Favicons
   https://github.com/gulpjs/gulp/tree/4.0
   https://www.npmjs.com/package/gulp-load-plugins
   https://www.npmjs.com/package/gulp-include
   ========================================================================== */
'use strict';

const gulp = require('gulp');
const $    = require('gulp-load-plugins')();

module.exports = function(options) {

    return function() {
        return gulp.src(options.src)
            .pipe($.include({
                includePaths: [
                    __dirname + "/../dev"
                ]
            }))
            .pipe(gulp.dest(options.dest));
    };

};
