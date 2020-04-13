var autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect-php'),
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    stripCssComments = require('gulp-strip-css-comments'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch');

/* ------------------------------------
Process CSS
------------------------------------ */
gulp.task('processCss', function() {
    return gulp.src('Scss/**/*.scss')

    // For production
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(rename('prod.css'))
    .pipe(gulp.dest('Prod'))

    // // For distribution
    // .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    // .pipe(rename('dist.min.css'))
    // .pipe(stripCssComments({ preserve: false }))
    // .pipe(gulp.dest('../Resources/Public/Dist'))

});

/* ------------------------------------
Process JS
------------------------------------ */
gulp.task('processJs', function() {
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'Js/imagesloaded.pkgd.min.js',
        'node_modules/slick-carousel/slick/slick.js',
        'Js/main.js'
    ])

    // For production
    .pipe(concat('prod.js'))
    .pipe(gulp.dest('Prod'))

    // // For distribution
    // .pipe(rename('dist.min.js'))
    // .pipe(uglify())
    // .pipe(gulp.dest('../Resources/Public/Dist'))
});

/* ------------------------------------
Copy assets
------------------------------------ */
// gulp.task('copyFonts', function() {
//     gulp.src([
//         'Fonts/**/*.eot',
//         'Fonts/**/*.svg',
//         'Fonts/**/*.ttf',
//         'Fonts/**/*.woff',
//         'Fonts/**/*.woff2'
//     ])
//     .pipe(gulp.dest('../Resources/Public/Fonts'))
//
// });

// gulp.task('copyImages', function() {
//     gulp.src('Img/**/*')
//     .pipe(gulp.dest('../Resources/Public/Img'))
// });

/* ------------------------------------
Serve and watch
------------------------------------ */
gulp.task('default', ['processCss', 'processJs'], function() {

    // connect.server({
    //     // base: './Somewhere/Else'
    // }, function() {
    //     browserSync({ proxy: '127.0.0.1:8000' });
    // });

    gulp.watch('Scss/**/*.scss', ['processCss']).on('change', browserSync.reload);
    gulp.watch('Js/**/*.js', ['processJs']).on('change', browserSync.reload);
    gulp.watch('Templates/**/*.php').on('change', browserSync.reload);
});

gulp.task('watch:scss', ['processCss'], function() {
    gulp.watch('Scss/**/*.scss', ['processCss']);
});

gulp.task('watch:js', ['processJs'], function() {
    gulp.watch('Js/**/*.js', ['processJs']);
});
