/* ==========================================================================
   Task: BrowserSync
   https://github.com/gulpjs/gulp/tree/4.0
   https://github.com/Browsersync/browser-sync
   ========================================================================== */
'use strict';

const gulp    = require('gulp');
const bs      = require('browser-sync').create();

module.exports = function(options) {

    return function() {
        bs.init({
            server: options.server,
            notify: false,
            tunnel: true,         // Random Public URL -> http://randomstring23232.localtunnel.me
            // tunnel: 'projectname' // Attempt to use the URL "http://projectname.localtunnel.me"
        });
        bs.watch(options.watch).on('change', bs.reload);
    };

};
