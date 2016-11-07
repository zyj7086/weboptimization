var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');


gulp.task('optimize', function () {
  return gulp.src('images/*.jpg')
    .pipe(imagemin({
      use:[imageminJpegRecompress({
        loops:4,
        min: 50,
        max: 95,
        quality:'high'
      })]
    }))
    .pipe(gulp.dest('dist/img'))
});

gulp.task('default', ['optimize']);

gulp.task('png', () =>
    gulp.src('images/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

var cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});
