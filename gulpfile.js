
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var modernizr = require('gulp-modernizr');

gulp.task('less', function () {
  return gulp.src('./style/less/test.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./style/css'));
});

gulp.task('modernizr', function() {
  gulp.src('./js/*.js')
    .pipe(modernizr())
    .pipe(gulp.dest("build/"))
});

gulp.task('watch', function(){
  gulp.watch('./style/less/*.less', ['less']);
  // Other watchers
});