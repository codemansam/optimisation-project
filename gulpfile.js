var gulp = require('gulp'),
    minifyHtml = require("gulp-minify-html");

gulp.task('minify-html', function () {
    gulp.src('pizza.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default',['minify-html'],function(){
});