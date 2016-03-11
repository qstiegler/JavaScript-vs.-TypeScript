var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var ngAnnotate = require('gulp-ng-annotate');

var tsProject = ts.createProject('tsconfig.json');

var onError = function(err) {
    notify.onError({
                title: "Gulp",
                subtitle: "Failure!",
                message: "Error: <%= error.message %>",
                sound: "Beep"
            })(err);

    this.emit('end');
};

var srcFiles = {
    ts: ['./src/**/*.ts']
};

var targetPaths = {
    dist: './dist'
};

gulp.task('scripts', function() {
    return tsProject.src()
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(concat('app.min.js'))
        .pipe(ngAnnotate({ add: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(targetPaths.dist))
        .pipe(notify({
            title: 'Gulp',
            subtitle: 'Success',
            message: 'JavaScript files created',
            sound: "Pop"
        }));
});

gulp.task('watch', function() {
    gulp.watch(srcFiles.ts, ['scripts']);
});

gulp.task('default', ['scripts']);