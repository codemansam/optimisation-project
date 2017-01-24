var gulp = require('gulp'),
    minifyHtml = require("gulp-minify-html"),
    cleanCSS = require('gulp-clean-css'),
    concatCSS = require('gulp-concat-css'),
    uncss = require('gulp-uncss');

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
    .pipe(concatCSS('actualFinal.css'))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('uncss', function() {
  return gulp.src([
      'dist/css/bootstrap-grid.css'
    ])
    .pipe(uncss({
      html: [
        'https://codemansam.github.io/pizza.html'
      ]
    }))
    .pipe(gulp.dest('dist/css/final'));
});

gulp.task('default',['minify-html'],function(){
});