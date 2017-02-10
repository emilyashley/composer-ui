
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
 
gulp.task('less', function () {
  return gulp.src('./style/less/test.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./style/css'));
});

gulp.task('watch', function(){
  gulp.watch('./style/less/*.less', ['less']);
  // Other watchers
})