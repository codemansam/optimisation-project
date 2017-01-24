var gulp = require('gulp'),
    minifyHtml = require("gulp-minify-html"),
    cleanCSS = require('gulp-clean-css'),
    concatCSS = require('gulp-concat-css');

gulp.task('minify-html', function () {
    gulp.src('pizza.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest('dist'));
});

gulp.task('cleanCSS', function() {
  return gulp.src('dev/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('concatCSS', function () {
  return gulp.src('dist/css/*.css')
    .pipe(concatCSS('final.css'))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('default',['minify-html'],function(){
});