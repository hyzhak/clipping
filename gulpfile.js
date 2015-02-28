var argv = require('yargs')
        .alias('m', 'message')
        .describe('m', 'message for commit')
        .argv,
    browserify = require('browserify'),
    buffer = require('vinyl-buffer'),
    del = require('del'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    mocha = require('gulp-mocha'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    stylish = require('jshint-stylish'),
    watchify = require('watchify');


gulp.task('clean:build', function (cb) {
    del(['./build'], cb)
});


var bundler = watchify(
    browserify('./index.js', watchify.args)
        .ignore('lapack')
        .ignore('WNdb')
);

gulp.task('browser-package', bundle); // so you can run `gulp browser-package` to build the file
bundler.on('update', bundle); // on any dep update, runs the bundler

function bundle() {
    return bundler.bundle()
        // log errors if they happen
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bundle.js'))
        // optional, remove if you dont want sourcemaps
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
        .pipe(sourcemaps.write('./')) // writes .map file
        //
        .pipe(gulp.dest('./build'));
}

gulp.task('test', function () {
    return gulp.src('./test/**/*Spec.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('lint', function() {
    return gulp.src(['./lib/**/*.js', './test/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('default', ['test', 'lint', 'clean:build', 'browser-package']);