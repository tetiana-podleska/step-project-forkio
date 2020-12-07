const gulp = require('gulp'),
      clean = require('gulp-clean'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync').create(),
      autoprefixer = require('gulp-autoprefixer'),
      cleanCSS = require('gulp-clean-css'),
      concat = require('gulp-concat'),
      imagemin = require('gulp-imagemin'),
      uglify = require('gulp-uglify'),
      babel = require('gulp-babel');

      


const path = {
    src: {
        html: './index.html',
        scss: './src/scss/**/*.scss',
        js: './src/js/**/*.js',
        img: './src/img/**/*'
    },
    dist: {
        root: './dist',
        css: './dist/css/',
        js: './dist/js/',
        img: './dist/img'
    }
}



/* FUNCTIONS */

const buildStyles = () => (
    gulp.src(path.src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(concat('styles.min.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(path.dist.css))
        .pipe(browserSync.stream())
);

const buildJS = () => (
    gulp.src(path.src.js)
        .pipe(concat('script.min.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(path.dist.js))
        .pipe(browserSync.stream())

);

const buildImg = () => (
    gulp.src(path.src.img)
        .pipe(imagemin())
        .pipe(gulp.dest(path.dist.img))
        .pipe(browserSync.stream())
)

const cleanDist = () => (
    gulp.src(path.dist.root, {allowEmpty: true})
        .pipe(clean())

);

/* WATCHER */
const watcher = () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(path.src.scss, buildStyles).on('change', browserSync.reload);
    gulp.watch(path.src.js, buildJS).on('change', browserSync.reload)
    gulp.watch(path.src.img, buildImg).on('change', browserSync.reload);
    gulp.watch(path.src.html).on('change', browserSync.reload)
}

/* TASKS */

gulp.task('build', gulp.series(
    cleanDist,
    buildStyles,
    buildJS,
    buildImg
));
gulp.task('dev', watcher);