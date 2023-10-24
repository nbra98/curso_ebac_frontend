const gulp = require('gulp'); // 
const sass = require('gulp-sass')(require('sass')); // Para comprimir o sass
const imagemin = require('gulp-imagemin'); // Para comprimir imagens
const uglify = require('gulp-uglify'); // Para comprimir o código em JavaScript

function compilaSass() {
  return gulp.src('./source/styles/main.scss')
  .pipe(sass({
    outputStyle: 'compressed'
  }))
  .pipe(gulp.dest('./build/styles'));
}

function comprimeImagens() {
  return gulp.src('./source/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./build/images'))
}

function comprimeJS() {
  return gulp.src('./source/scripts/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./build/scripts'))
}

exports.default = function() {
  gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
  gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJS));
  gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimeImagens));
}