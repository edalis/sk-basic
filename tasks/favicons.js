/* ==========================================================================
   Task: Favicons
   https://github.com/gulpjs/gulp/tree/4.0
   https://www.npmjs.com/package/gulp-load-plugins
   https://www.npmjs.com/package/gulp-favicons
   https://stackoverflow.com/questions/34630555/gulp-favicon-task
   ========================================================================== */
'use strict';

const gulp = require('gulp');
const $    = require('gulp-load-plugins')();

module.exports = function(options) {

    return function() {
        return gulp.src(options.src)
            .pipe($.favicons(
                {
                    appName: 'My App',                // Your application's name. `string`
                    appDescription: null,             // Your application's description. `string`
                    developerName: 'edalis',          // Your (or your developer's) name. `string`
                    developerURL: null,               // Your (or your developer's) URL. `string`
                    background: null,                 // Background colour for flattened icons. `string`
                    display: 'standalone',            // Android display: "browser" or "standalone". `string`
                    orientation: 'portrait',          // Android orientation: "portrait" or "landscape". `string`
                    version: 1.0,                     // Your application's version number. `number`
                    logging: false,                   // Print logs to console? `boolean`
                    online: false,                    // Use RealFaviconGenerator to create favicons? `boolean`
                    pipeHTML: true,
                    replace: true,
                    path: './assets/images/favicons', // Path for overriding default icons path. `string`
                    url:  '/',                        // Absolute URL for OpenGraph image. `string`
                    html: 'favicons.html',
                    icons: {
                        android: false,               // Create Android homescreen icon. `boolean`
                        appleIcon: true,              // Create Apple touch icons. `boolean`
                        appleStartup: false,          // Create Apple startup images. `boolean`
                        coast: false,                 // Create Opera Coast icon. `boolean`
                        favicons: true,               // Create regular favicons. `boolean`
                        firefox: false,               // Create Firefox OS icons. `boolean`
                        opengraph: false,             // Create Facebook OpenGraph image. `boolean`
                        twitter: false,               // Create Twitter Summary Card image. `boolean`
                        windows: false,               // Create Windows 8 tile icons. `boolean`
                        yandex: false                 // Create Yandex browser icon. `boolean`
                    }
                }
            ))
            .pipe(gulp.dest(options.dest));
    };

};
