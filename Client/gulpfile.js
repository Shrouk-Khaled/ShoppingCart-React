const gulp = require('gulp');
const gulpsass = require('gulp-sass');
const sass = gulpsass(require('sass'));

gulp.task('sass', async ()=>{
    gulp.src('src/*.css').pipe(sass()).pipe(gulp.dest('src/css'))
})