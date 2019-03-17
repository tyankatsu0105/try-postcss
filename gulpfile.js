const gulp = require('gulp');
const postcss = require('gulp-postcss');

gulp.task('default', function () {
  const processors = [
    require('./postcss-myplugin')({
      rootPxValue: 10
    })
  ];
  return gulp.src('./tests/style.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});