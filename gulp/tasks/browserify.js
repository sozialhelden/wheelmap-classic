"use strict";

const gulp = require('gulp');
const browserify = require('browserify');
const gulpUtil = require('gulp-util');
const source = require('vinyl-source-stream');
const babelify = require('babelify');

const bundler = browserify({
  debug: true,
  entries: ['./gulp/components.js'],
  transform: [
    babelify
  ]
});

gulp.task('browserify', function() {
  return bundler.bundle()
    .on('error', function(error) {
      gulpUtil.log(error.toString());
      this.emit('end');
    })
    .pipe(source('components.js'))
    .pipe(gulp.dest('./app/assets/javascripts/dist'));
});

gulp.task('browserify:watch', function() {
  gulp.watch('./gulp/**/*.js', ['browserify']);
});