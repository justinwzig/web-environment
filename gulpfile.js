'use strict'

//PLUGINS
const gulp = require('gulp')

//const coffee = require('gulp-coffee')
//const uglify = require('gulp-uglify')

const sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')

const source = 'src/**/*'
const clientOutput = 'docs'
const html = '.html'
const styles = '.scss'
const scripts = '.js'

gulp.task('html', function() {
  return gulp.src(source + html)
    .pipe(gulp.dest(clientOutput))
})

gulp.task('scripts', function() {
  return gulp.src(source + scripts)
    .pipe(gulp.dest(clientOutput))
})

gulp.task('styles', function() {
  return gulp.src(source + styles)
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest(clientOutput))
})

//gulp.task('scripts', function () {
//  return gulp.src(source + scripts)
//    .pipe(coffee())
//    .pipe(uglify())
//    .pipe(gulp.dest(clientOutput))
//    .pipe(livereload());
//})

gulp.task('watch', function() {
  gulp.watch(source + html, ['html'])
  gulp.watch(source + styles, ['styles'])
  gulp.watch(source + scripts, ['scripts'])
})

gulp.task('default', ['watch', 'html', 'scripts', 'styles'])