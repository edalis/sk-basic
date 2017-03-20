/* ==========================================================================
   Task: SASS
   https://github.com/gulpjs/gulp/tree/4.0
   https://www.npmjs.com/package/gulp-load-plugins
   https://github.com/postcss/autoprefixer
   https://github.com/postcss/postcss-use
   https://github.com/assetsjs/postcss-assets
   https://github.com/hudochenkov/postcss-sorting
   https://www.npmjs.com/package/gulp-notify
   https://www.npmjs.com/package/gulp-plumber
   https://www.npmjs.com/package/gulp-sass
   https://github.com/peterramsing/lost
   https://www.npmjs.com/package/rucksack-css
   ========================================================================== */
'use strict';

const gulp   = require('gulp');
const $      = require('gulp-load-plugins')();
/* POST-CSS */
const use    = require('postcss-use');
const prefix = require('autoprefixer');
const sort   = require('postcss-sorting');

module.exports = function(options) {

    return function() {
        return gulp.src(options.src)
            .pipe($.plumber({
                errorHandler: $.notify.onError(err => ({
                    title: 'ERROR SASS Сompilation',
                    message: err.message
                }))
            }))
            .pipe($.sass({
                outputStyle: 'expanded',
                indentWidth: 4
            }))
            .pipe($.postcss([
                use({
                    modules: ['lost', 'rucksack-css', 'postcss-assets'],
                    options: {
                        assets: {
                            loadPaths: ['./dev/assets/images'],
                            relative: options.dest
                        }
                    }
                }),
                prefix({
                    browsers: ['last 3 versions', '> 1%'],
                    cascade: false
                }),
                sort({'sort-order': 'yandex'})
            ]))
            .pipe(gulp.dest(options.dest));
    };

};
