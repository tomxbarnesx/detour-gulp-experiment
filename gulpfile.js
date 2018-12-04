var gulp = require('gulp'),
    connect = require('gulp-connect'),
    deploy = require('gulp-gh-pages');

gulp.task('connect', function() {
    connect.server({
        port: 8889
    });
});

gulp.task('default', ['connect']);

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src("./src/**/*")
    .pipe(deploy())
});