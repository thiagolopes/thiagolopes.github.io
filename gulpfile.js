var gulp = require('gulp'),
    browsersync = require ('browser-sync').create(),
    reloed = browsersync.reload,
    sass = require('gulp-sass');
 
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
    .pipe(sass())
    .pipe(gulp.dest("./dist/css"))
    .pipe(browsersync.stream());
})
