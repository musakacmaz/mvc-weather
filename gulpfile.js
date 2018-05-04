/* File: gulpfile.js */

// grab our gulp packages
var gulp = require("gulp"),
  gutil = require("gulp-util");

// create a default task and just log a message
gulp.task("default", function() {
  return gutil.log("Gulp is running!");
});

gulp.task("series:first", function() {
  console.log("first task! <-----");
});

gulp.task("series:second", ["series:first"], function() {
  console.log("second task! <-----");
});

gulp.task("series", ["series:first", "series:second"], function() {});
