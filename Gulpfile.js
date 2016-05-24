var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var exec = require('child_process').exec;

// Proccess sass to css
gulp.task('sass', function() {
  return gulp.src("./sass/main.scss")
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest("./css"));
});

// Proccess pug to html
gulp.task('pug', function() {
  return gulp.src("./*.pug")
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest("./"));
});

// gen links.pug from links.json
gulp.task('generate', function() {
	exec("node link-gen.js");
});

gulp.task('watch', function() {
	gulp.watch(['./sass/*.scss', './sass/**/*.scss'], ['sass']);
	gulp.watch(['./index.pug', './about.pug', './contact.pug'], ['pug']);
});
