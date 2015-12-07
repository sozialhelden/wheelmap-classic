"use strict";

let gulp = require('gulp'),
  watchify = require('watchify'),
  browserify = require('browserify'),
  gulpUtil = require('gulp-util'),
  source = require('vinyl-source-stream'),
  babelify = require('babelify');

let bundler = watchify(browserify({
  debug: true,
  entries: ['./gulp/components.js'],
  transform: [
    babelify.configure({
      optional: ['runtime', 'es7.classProperties']
    })
  ]
}));

function bundle() {
  return bundler.bundle()
    .on('error', (error) => gulpUtil.log(error.message))
    .pipe(source('components.js'))
    .pipe(gulp.dest('./app/assets/javascripts/dist'));
}

gulp.task('browserify', bundle);
bundler.on('update', bundle);
bundler.on('log', gulpUtil.log);

gulp.task('default', ['browserify']);