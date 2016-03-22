var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    fileinclude = require('gulp-file-include'),
    livereload = require('gulp-livereload'),
    del = require('del');

gulp.task('styles', function() {
  return gulp.src(['src/vendor/css/*.css', 'src/styles/*.less'])
    .pipe(less())
    .pipe(autoprefixer('last 2 version'))
    .pipe(concat('styles.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('scripts', function() {
  return gulp.src(['src/vendor/js/**/*.js', 'src/scripts/*.js'])
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('html', function() {
    return gulp.src('src/html/**/*')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
    return gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist'));
});

gulp.task('default', function() {
    gulp.start('styles', 'scripts', 'html', 'images');
});

gulp.task('watch', function() {



  // Watch styles files
  gulp.watch('src/styles/**/*', ['styles']);

  // Watch html files
  gulp.watch('src/html/**/*', ['html']);

  // Watch .js files
  gulp.watch('src/scripts/**/*.js', ['scripts']);

  // Watch image files
  gulp.watch('src/images/**/*', ['images']);

});
