// =============================================================================
// Gulpfile
// =============================================================================
//
// Available tasks:
// =============================================================================
// 'gulp'                : Запуск процесса разработки
// 'gulp build'          : Сборка проекта после завершения разработки
//
// 'gulp favicons'       : Создание favicons для различных устройств
//
// 'gulp sass'           : Компиляция стилей SCSS, SASS в папку ./css проекта
//
// 'gulp watch:sass'     : Отслеживание изменений в файлах SASS, SCSS
//
// 'gulp bs:dev'         : Автоматическая перезагрузка браузера, при изменении
//                         файлов в папке ./dev в процессе разработки
// 'gulp bs'             : Автоматическая перезагрузка браузера, при изменении
//                         файлов в папке ./public после сборки проекта
//
// 'gulp clean:public'   : Удаление папки ./public
// 'gulp clean'          : Удаление ненужных папок и файлов
//
// 'gulp build:html'     : Сборка html файлов
// 'gulp build:image'    : Минификация и сбока изображений .png, gif, svg
// 'gulp build:smushit'  : Минификация и сбока изображений .jpg
// 'gulp build:files'    : Сборка всех остальных файлов
// 'gulp build:favicons' : Подключение в html файл и сборка favicons
//
// 'gulp clear'          : Очистка кэша изображений
// =============================================================================
'use strict';

const gulp = require('gulp');

function lazyRequireTask(taskName, path, options) {
    options = options || {};
    options.taskName = taskName;
    gulp.task(taskName, function(callback) {
        let task = require(path).call(this, options);

        return task(callback);
    });
}

// Task: SASS
// =============================================================================
lazyRequireTask('sass', './tasks/sass', {
    src:  './dev/styles/**/*.{scss,sass}',
    dest: './dev/css'
});

// Task: Watch SASS
// =============================================================================
lazyRequireTask('watch:sass', './tasks/watch-sass', {
    watch: './dev/styles/**/*.{scss,sass}'
});

// Task: BrowserSync Development
// =============================================================================
lazyRequireTask('bs:dev', './tasks/bs-dev', {
    server: './dev',
    watch:  [
        './dev/*.html',
        './dev/assets/**/*',
        './dev/css/**/*',
        './dev/js/**/*'
    ]
});

// Task: Default
// =============================================================================
gulp.task('default',
    gulp.series(
        'sass',
        gulp.parallel(
            'watch:sass',
            'bs:dev'
        )
    )
);

// Task: Clean Public
// =============================================================================
lazyRequireTask('clean:public', './tasks/clean-public', {
    del: './public'
});

// Task: Clean
// =============================================================================
lazyRequireTask('clean', './tasks/clean', {
    del: './public/**/.gitkeep'
});

// Task: Favicons
// =============================================================================
lazyRequireTask('favicons', './tasks/favicons', {
    src:     './dev/assets/images/favicon.png',
    dest:    './dev/assets/images/favicons'
});

// Task: Build HTML
// =============================================================================
lazyRequireTask('build:html', './tasks/build-html', {
    src:  './dev/*.html',
    dest: './public'
});

// Task: Build Image
// =============================================================================
lazyRequireTask('build:image', './tasks/build-image', {
    src: [
        './dev/assets/images/**/*.{png,gif,svg}',
        '!./dev/assets/images/favicon.png'
    ],
    dest: './public'
});

// Task: Build Smushit
// =============================================================================
lazyRequireTask('build:smushit', './tasks/build-smushit', {
    src:  './dev/assets/images/**/*.jpg',
    dest: './public'
});

// Task: Build Files
// =============================================================================
lazyRequireTask('build:files', './tasks/build-files', {
    src: [
        './dev/{*.*,.*}',
        '!./dev/*.html',
        './dev/assets/**/*',
        '!./dev/assets/images/**/*.{jpg,png,gif,svg,html}',
        '!./dev/{vendors,vendors/**/*}'
    ],
    dest: './public'
});

// Task: Build Favicons
// =============================================================================
lazyRequireTask('build:favicons', './tasks/build-favicons', {
    src:  './public/*.html',
    dest: './public'
});

// Task: BrowserSync
// =============================================================================
lazyRequireTask('bs', './tasks/bs', {
    server: './public',
    watch:  './public/**/*'
});

// Task: Build
// =============================================================================
gulp.task('build',
    gulp.series(
        'clean:public',
        gulp.parallel(
            'sass',
            'favicons'
        ),
        gulp.parallel(
            'build:image',
            'build:smushit'
        ),
        gulp.parallel(
            'build:html',
            'build:files'
        ),
        'build:favicons',
        'clean',
        'bs'
    )
);

// Task: Clear Cache
// =============================================================================
lazyRequireTask('clear', './tasks/clear', {});
