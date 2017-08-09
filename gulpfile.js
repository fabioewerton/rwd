var gulp = require('gulp');
var html = require('gulp-htmlmin');
var sass = require('gulp-sass');
var clean = require('gulp-clean-css');
var notify = require('gulp-notify');

gulp.task('html', function() {
    return gulp.src('_source/index.html')
      .pipe(html({collapseWhitespace: true}))
      .pipe(gulp.dest('_dist/'));
});

gulp.task('sass',['html'], function() {
    return gulp.src('_source/scss/style.scss')
      .pipe(sass(''))
      .on("error", notify.onError({message: "Error: <%= error.message %>", title: "OPAA..., TEM ALGO ERRADO NO SEU CÓDIGO."}))
      .pipe(clean(''))
      .pipe(gulp.dest('_dist/css/'));
});

gulp.task('default', ['html', 'sass'], function() {
    gulp.watch('_source/index.html', ['html']);
    gulp.watch('_source/scss/**/*.scss', ['sass']);
});