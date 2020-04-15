const autoprefixer = require('gulp-autoprefixer'),
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
gulp.task('processCss', done => {
    // return gulp.src([
    //     'Scss/**/*.scss',
    //     '!Scss/print.scss'
    // ])
    return gulp.src('Scss/main.scss')

    // For production
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(rename('prod.css'))
        .pipe(gulp.dest('Prod'))

        // For distribution
        // .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        // .pipe(rename('dist.min.css'))
        // .pipe(stripCssComments({ preserve: false }))
        // .pipe(gulp.dest('../Resources/Public/Dist'));

    done();
});

// gulp.task('processPrintCss', done => {
//     return gulp.src('Scss/print.scss')
//
//     // For production
//         .pipe(sass().on('error', sass.logError))
//         .pipe(autoprefixer())
//         .pipe(rename('print.css'))
//         .pipe(gulp.dest('Prod'))
//
//         // For distribution
//         .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
//         .pipe(rename('print.min.css'))
//         .pipe(stripCssComments({ preserve: false }))
//         .pipe(gulp.dest('../Resources/Public/Dist'));
//
//     done();
// });

/* ------------------------------------
Process JS
------------------------------------ */
gulp.task('processJs', done => {
    return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        // './node_modules/datatables.net/js/jquery.dataTables.js',
         './node_modules/slick-carousel/slick/slick.js',
        // './node_modules/jcf/js/jcf.js',
        // './node_modules/jcf/js/jcf.select.js',
        // './node_modules/jcf/js/jcf.checkbox.js',
        // './node_modules/jcf/js/jcf.radio.js',
        // './node_modules/body-scroll-lock/lib/bodyScrollLock.js',
        // './node_modules/cookieconsent/src/cookieconsent.js',
        // 'Js/cookieconsent.js',
        //****************declaration js files****************//
        './node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
        './node_modules/popper.js/dist/popper.js',
        'node_modules/bootstrap/dist/js/bootstrap.js.map',
        'node_modules/bootstrap/dist/js/bootstrap.js',
        'Js/main.js'
    ])
    // For production
        .pipe(concat('prod.js'))
        .pipe(gulp.dest('Prod'))

        // For distribution
        // .pipe(rename('dist.min.js'))
        // .pipe(uglify().on('error', console.error))
        // .pipe(gulp.dest('../Resources/Public/Dist'));

    done();
});

/* ------------------------------------
Copy assets
------------------------------------ */
// gulp.task('copyFonts', done => {
//     gulp.src([
//         './node_modules/roboto-fontface/fonts/**/*',
//         'Fonts/**/*.eot',
//         'Fonts/**/*.svg',
//         'Fonts/**/*.ttf',
//         'Fonts/**/*.woff',
//         'Fonts/**/*.woff2'
//     ])
//         .pipe(gulp.dest('../Resources/Public/Fonts'))
//     done();
// });

// gulp.task('copyImages', done => {
//     gulp.src('Img/**/*')
//         .pipe(gulp.dest('../Resources/Public/Img'))
//     done();
// });

/* ------------------------------------
Serve and watch
------------------------------------ */
gulp.task('watch', gulp.series('processCss', 'processJs', (done) => {
    connect.server({
        // base: './Somewhere/Else'
    }, function () {
        browserSync({ proxy: '127.0.0.1:8000' });
    });

    gulp.watch('Scss/**/*.scss', gulp.series('processCss')).on('change', browserSync.reload);
    gulp.watch('Js/**/*.js', gulp.series('processJs')).on('change', browserSync.reload);
    gulp.watch('Templates/**/*.php').on('change', browserSync.reload);

    gulp.watch('Scss/**/*.scss', gulp.series('processCss'));
    gulp.watch('Js/**/*.js', gulp.series('processJs'));
    gulp.watch('Templates/**/*.php');

    done();
}));

gulp.task('default', gulp.series('watch'));

// ====================================
// Additional task for copying propblematical assets
// ====================================
// gulp.task('copyCssVendors', done => {
//     gulp.src([
//         './node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css',
//         './node_modules/datatables.net-dt/css/jquery.dataTables.css'
//     ])
//         .pipe(rename({
//             prefix: '_',
//             extname: '.scss'
//         }))
//         .pipe(gulp.dest('Vendors'));
//     done();
// });
