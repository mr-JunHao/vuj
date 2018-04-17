const gulp = require('gulp')
const cssmin = require('gulp-cssmin')
const salad = require('postcss-salad')(require('../../salad.config'));
const postcss = require('gulp-postcss')
const package = require('../../package')

gulp.task('compile', function () {
  return gulp.src('./src/*.scss')
    //使用postcss处理salad
    .pipe(postcss([salad]))
    //进行css压缩
    .pipe(cssmin())
    //输出 './lib' 目录下
    .pipe(gulp.dest('../../lib/' + package.name + '/'))
})


gulp.task('build:css', ['compile'])
