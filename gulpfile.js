var argv = require('yargs')
        .alias('m', 'message')
        .describe('m', 'message for commit')
        .argv,
    buffer = require('vinyl-buffer'),
    deploy = require('gulp-gh-pages'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    del = require('del'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
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

gulp.task('deploy', function () {
    return gulp.src('./dist/**/*')
        .pipe(deploy({
            cacheDir: '.dist-cache',
            message: argv.m
        }));
});

//TODO: test, jshint
gulp.task('default', ['clean:build', 'browser-package']);

//TODO: build and copy
gulp.task('publish', ['deploy']);