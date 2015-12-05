"use strict";

let gulp = require('gulp'),
  watchify = require('watchify'),
  browserify = require('browserify'),
  gulpUtil = require('gulp-util'),
  source = require('vinyl-source-stream'),
  babelify = require('babelify');

let bundler = watchify(browserify({
  entries: ['./gulp/components.js'],
  transform: [
    babelify.configure({
      optional: ['runtime', 'es7.classProperties']
    })
  ]
}));

function bundle() {
  return bundler.bundle()
    .pipe(source('components.js'))
    .on('error', gulpUtil.log)
    .pipe(gulp.dest('./app/assets/javascripts/dist'));
}

gulp.task('browserify', bundle);
bundler.on('update', bundle);
bundler.on('log', gulpUtil.log);

gulp.task('default', ['browserify']);