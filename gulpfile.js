const { watch, src, dest, parallel, pipe } = require('gulp');
const { exec } = require('gulp-execa');
const sass = require('gulp-sass');

function eleventyServe() {
    return exec('eleventy --serve');
}

function compileSass(done) {
  src('src/sass/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(dest('dist/css/'));
  done();
}

function moveJs(done) {
  src('src/js/*.js')
  .pipe(dest('dist/js/'));
  done();
}

function moveImg(done) {
  src('src/img/*.*')
  .pipe(dest('dist/img'));
  done();
}

function observeJs() {
  watch('src/js/*.js', moveJs);
}

function observeImg() {
  watch('src/img/*.*', moveImg);
}

function observeSass() {
  watch('src/sass/*.scss', compileSass);
}

function eleventyBuild() {
    return exec('eleventy');
}

exports.serve = parallel(eleventyServe, observeJs, observeSass, observeImg, compileSass, moveJs, moveImg);
exports.build = parallel(eleventyBuild, compileSass, moveJs, moveImg);
