const gulp = require('gulp');
const postcss = require('gulp-postcss');

// font-sizeをpxからremにさせるやつ
// gulp.task('default', function () {
//   const processors = [
//     require('./postcss-font-px-to-rem')({
//       rootPxValue: 10
//     })
//   ];
//   return gulp.src('./tests/style.css')
//     .pipe(postcss(processors))
//     .pipe(gulp.dest('./dest'));
// });

// プロパティのcaseを変更するやつ
gulp.task('default', function () {
  const processors = [
    require('./postcss-change-case')()
  ];
  return gulp.src('./tests/style.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});