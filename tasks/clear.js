/* ==========================================================================
   Task: Clear Cache
   https://github.com/gulpjs/gulp/tree/4.0
   https://www.npmjs.com/package/gulp-load-plugins
   https://www.npmjs.com/package/gulp-cache
   ========================================================================== */
'use strict';

const gulp = require('gulp');
const $    = require('gulp-load-plugins')();

module.exports = function(options) {

    return function(done) {
        return $.cache.clearAll(done)
    };

};
