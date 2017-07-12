//image min, e outros pacotes para css e sass
var gulp = require('gulp'),
    browsersync = require ('browser-sync').create(),
    reloed = browsersync.reload,
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    gulpclean = require('gulp-clean'),
    cssmin = require('gulp-cssmin');

//javascript
var jshint = require('gulp-jshint'),
    jshintstylish = require('jshint-stylish');

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
    gulp.watch(['./src/js/**/*.js'], ['lint']);
    gulp.watch(['./src/js/**/*.json'], reload);
});

gulp.task('sass', function(){
    return gulp.src("./src/sass/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
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

gulp.task('lint', function(){
    return gulp.src('./src/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(jshintstylish))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browsersync.stream());
});

gulp.task('clean-font-folder', function(){
    return gulp.src('./dist/fonts')
        .pipe(gulpclean());
})

gulp.task('make-font',['clean-font-folder'], function(){
    return gulp.src('./src/fonts/*')
        .pipe(gulp.dest('./dist/fonts'));
})
