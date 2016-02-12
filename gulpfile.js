var gulp = require('gulp');
// create new instance of BrowserSync
var browserSync = require('browser-sync').create();

gulp.task('serve', function(gulpCallback) {
  browserSync.init({
    // serve out of ./
    server: './',
    open: true
  }, function callback() {
    // (server is now up)

    // set up watch to reload browsers when source changes
    gulp.watch(['./index.html', './js/**/*.js', './assets/**/*.css'], browserSync.reload);

    // notify gulp that this task is done
    gulpCallback();
  });
});