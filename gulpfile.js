'use strict';

var gulp   = require('gulp');
var gutil  = require('gulp-util');
var argv   = require('minimist')(process.argv);
var gulpif = require('gulp-if');
var prompt = require('gulp-prompt');
var rsync  = require('gulp-rsync');

gulp.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e'
};

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

gulp.task('deploy', function () {
  var rsyncPaths = ['dist', 'src', 'e2e', 'assets'];

  // Default options for rsync
  var rsyncConf = {
    progress: true,
    incremental: true,
    relative: true,
    emptyDirectories: true,
    recursive: true,
    clean: true,
    exclude: [],
  };

  rsyncConf.hostname = 'wastebuddy.us'; // hostname
  rsyncConf.username = 'wbdeploy'; // ssh username
  rsyncConf.destination = '/home/david/webapps/wastebuddy'; // path where uploaded files go

  // Use gulp-rsync to sync the files
  return gulp.src(rsyncPaths)
    .pipe(rsync(rsyncConf));
});

function throwError(taskName, msg) {
  throw new gutil.PluginError({
      plugin: taskName,
      message: msg
    });
}
