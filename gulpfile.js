var gulp = require('gulp'),
    browsersync = require ('browser-sync').create(),
    reloed = browsersync.reload,
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    gulpclean = require('gulp-clean'),
    cssmin = require('gulp-cssmin');

gulp.task('default',['browserSyncWatcher'],function(){

});

gulp.task('browserSyncWatcher', function(){
    browsersync.init({
        server:{
            baseDir: '.'
        }
    });

    gulp.watch(['./**/*.scss'], ['sass']);
    gulp.watch(['./*.html'], reloed);
});

gulp.task('sass', function(){
    return gulp.src("./src/sass/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest("./dist/css"))
        .pipe(browsersync.stream());
});

gulp.task('clean-img-folder',function(){
    return gulp.src('./dist/img')
        .pipe(gulpclean());
});

gulp.task('make-img', ['clean-img-folder'],function(){
    return gulp.src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
});
