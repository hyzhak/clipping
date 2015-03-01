var argv = require('yargs')
        .alias('m', 'message')
        .describe('m', 'message for commit')
        .argv,
    bump = require('gulp-bump'),
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

var build = browserify('./index.js', watchify.args)
        .ignore('lapack')
        .ignore('WNdb');

function buildBundle(bundler) {
    return function() {
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
    };
}

gulp.task('build-package', ['clean:build'], function() {
    return buildBundle(build);
});

gulp.task('bump', function(){
    gulp.src('./package.json')
        .pipe(bump())
        .pipe(gulp.dest('./'));
});

gulp.task('watchify-package', ['clean:build'], function() {
    var bundler = watchify(build),
        watchifyBundle = buildBundle(bundler);

    bundler.on('update', watchifyBundle); // on any dep update, runs the bundler

    return watchifyBundle();
});

gulp.task('test', function () {
    return gulp.src('./test/**/*Spec.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('lint', function() {
    return gulp.src(['./lib/**/*.js', './test/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('default', ['test', 'lint', 'clean:build', 'watchify-package']);

gulp.task('build', ['bump', 'build-package', 'lint', 'test']);
