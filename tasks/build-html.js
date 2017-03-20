/* ==========================================================================
   Task: Build HTML
   https://github.com/gulpjs/gulp/tree/4.0
   https://www.npmjs.com/package/gulp-load-plugins
   https://www.npmjs.com/package/gulp-useref
   https://www.npmjs.com/package/gulp-if
   https://www.npmjs.com/package/gulp-uglify
   https://www.npmjs.com/package/gulp-clean-css
   ========================================================================== */
'use strict';

const gulp = require('gulp');
const $    = require('gulp-load-plugins')({
    rename: {'gulp-clean-css': 'clean'}
});

module.exports = function(options) {

    return function() {
        return gulp.src(options.src)
            .pipe($.useref())
            .pipe($.if('*.js', $.uglify({
                preserveComments: 'license'
            })))
            .pipe($.if('*.css', $.clean({
                advanced: false
            })))
            .pipe(gulp.dest(options.dest));
    };

};
