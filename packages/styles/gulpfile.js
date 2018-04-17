const gulp = require('gulp')
const postcss = require('gulp-postcss')
const package = require('../../package')

gulp.task('compile', function () {
  return gulp.src('./src/*.css')
    //使用postcss处理salad
    .pipe(postcss([
      require('postcss-css-reset')(),
      require('postcss-import')(),
      require('precss')(),
      require('postcss-cssnext')({
        browsers: ['ie > 8']
      }),
      require('cssnano')({
        preset: 'default'
    })
    ]))
    //输出 './lib' 目录下
    .pipe(gulp.dest('../../lib/' + package.name + '/'))
})


gulp.task('build:css', ['compile'])
