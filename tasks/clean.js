/* ==========================================================================
   Task: Clean
   https://github.com/gulpjs/gulp/tree/4.0
   https://www.npmjs.com/package/del
   ========================================================================== */
'use strict';

const gulp = require('gulp');
const del  = require('del');

module.exports = function(options) {

    return function() {
        return del(options.del)
    };

};
