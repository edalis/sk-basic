/* ==========================================================================
   Task: Build Smushit
   https://github.com/gulpjs/gulp/tree/4.0
   https://www.npmjs.com/package/gulp-load-plugins
   https://www.npmjs.com/package/gulp-cache
   https://www.npmjs.com/package/gulp-smushit
   ========================================================================== */
'use strict';

const gulp = require('gulp');
const $    = require('gulp-load-plugins')();

module.exports = function(options) {

    return function() {
        return gulp.src(options.src, {base: './dev'})
            .pipe($.cache($.smushit({
                verbose: true
            })))
            .pipe(gulp.dest(options.dest));
    };

};
