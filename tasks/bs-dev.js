/* ==========================================================================
   Task: BrowserSync Development
   https://github.com/gulpjs/gulp/tree/4.0
   https://github.com/Browsersync/browser-sync
   ========================================================================== */
'use strict';

const gulp  = require('gulp');
const bsdev = require('browser-sync').create('Development');

module.exports = function(options) {

    return function() {
        bsdev.init({
            server: options.server,
            notify: false,
            // tunnel: true,         // Random Public URL -> http://randomstring23232.localtunnel.me
            // tunnel: 'projectname' // Attempt to use the URL "http://projectname.localtunnel.me"
        });
        bsdev.watch(options.watch).on('change', bsdev.reload);
    };

};
