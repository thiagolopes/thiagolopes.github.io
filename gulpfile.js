var gulp = require('gulp'),
    browsersync = require ('browser-sync').create(),
    reloed = browsersync.reload,
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');
 
gulp.task('default',['browserSyncWatcher'],function(){

});

gulp.task('browserSyncWatcher', function(){
    browsersync.init({
        server:{
            baseDir: '.'
        }
    });
    
    gulp.watch(['./src/sass/**/*.scss'], ['sass']);
    gulp.watch(['./*.html'], reloed);
});

gulp.task('sass', function(){
    return gulp.src("./src/sass/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browsersync.stream());
})
