'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var argv  = require('minimist')(process.argv);
var rsync = require('gulp-rsync');
var prompt = require('gulp-prompt');
var gulpif = require('gulp-if');

gulp.task('deploy', function() {

  // Dirs and Files to sync
  var rsyncPaths = ['dist'];

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

  // Staging
  if (argv.staging) {

    rsyncConf.hostname = ''; // hostname
    rsyncConf.username = ''; // ssh username
    rsyncConf.destination = ''; // path where uploaded files go

  // Production
  } else if (argv.production) {

    //console.log(ENV)
    rsyncConf.hostname = 'wf-45-33-5-44.webfaction.com'; // hostname
    rsyncConf.username = 'wbdeploy'; // ssh username
    rsyncConf.destination = '/home/david/webapps/wastebuddy'; // path where uploaded files go


  // Missing/Invalid Target
  } else {
    throwError('deploy', gutil.colors.red('Missing or invalid target'));
  }


  // Use gulp-rsync to sync the files
  return gulp.src(rsyncPaths)
    .pipe(gulpif(
        argv.production,
        prompt.confirm({
          message: 'Heads Up! Are you SURE you want to push to PRODUCTION?',
          default: false
        })
    ))
    .pipe(rsync(rsyncConf));

});


function throwError(taskName, msg) {
  throw new gutil.PluginError({
      plugin: taskName,
      message: msg
    });
}
