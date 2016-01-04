"use strict";

let gulp = require('gulp'),
  browserify = require('browserify'),
  gulpUtil = require('gulp-util'),
  source = require('vinyl-source-stream'),
  babelify = require('babelify');

let bundler = browserify({
  debug: true,
  entries: ['./gulp/components.js'],
  transform: [
    babelify.configure({
      optional: ['runtime', 'es7.classProperties']
    })
  ]
});

gulp.task('browserify', function() {
  return bundler.bundle()
    .on('error', gulpUtil.log)
    .pipe(source('components.js'))
    .pipe(gulp.dest('./app/assets/javascripts/dist'));
});

gulp.task('browserify:watch', function() {
  gulp.watch('./gulp/**/*.js', ['browserify']);
});