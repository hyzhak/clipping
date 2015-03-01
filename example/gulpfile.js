var argv = require('yargs')
        .demand('m')
        .alias('m', 'message')
        .describe('m', 'message for commit')
        .argv,
    buffer = require('vinyl-buffer'),
    bump = require('gulp-bump'),
    browserify = require('browserify'),
    del = require('del'),
    deploy = require('gulp-gh-pages'),
    gulp = require('gulp'),
    less = require('gulp-less'),
    reactify = require('reactify'),
    rename = require('gulp-rename'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');


var paths = {
    css: ['src/css/**/*.less'],
    app: ['./src/js/app.jsx'],
    js: ['src/js/*.js'],

    dest: './build'
};

gulp.task('clean', function(done) {
    del(['build'], done);
});

// It finds all our Stylus files and compiles them.
gulp.task('css', ['clean'], function() {
    return gulp.src(paths.css)
        .pipe(less())
        .pipe(gulp.dest(paths.dest +'/css'));
});

// It will Browserify our code and compile React JSX files.
gulp.task('js', ['clean'], function() {
    // Browserify/bundle the JS.
    browserify(paths.app)
        .transform(reactify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(paths.dest +'/src/'));
});

gulp.task('bump', function(){
    gulp.src('./package.json')
        .pipe(bump())
        .pipe(gulp.dest('./'));
});

gulp.task('compress-js', ['clean'], function() {
    return browserify(paths.app)
        .transform(reactify)
        .bundle()
        .pipe(source('bundle.js')) // gives streaming vinyl file object
        .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
        .pipe(uglify())
        .pipe(gulp.dest(paths.dest + '/src/'))
});

gulp.task('copy-index', ['clean'], function() {
    gulp.src('./index.html')
        .pipe(gulp.dest(paths.dest));
});

gulp.task('copy-readme', ['clean'], function() {
    gulp.src('./README.md')
        .pipe(gulp.dest(paths.dest));
});

gulp.task('deploy', ['css', 'compress-js', 'copy-index', 'copy-readme'], function () {
    return gulp.src(paths.dest + '/**/*')
        .pipe(deploy({
            //lib tries to find .git folder in root and can't so we should define all params manual
            remoteUrl: 'git@github.com:hyzhak/clipping.git',
            cacheDir: '.cacheDir',
            message: argv.m
        }));
});

// Rerun tasks whenever a file changes.
gulp.task('watch', function() {
    gulp.watch(paths.css, ['css']);
    gulp.watch(paths.js, ['js']);
});

// The default task (called when we run `gulp` from cli)
gulp.task('default', ['watch', 'css', 'js', 'copy-index']);

// Prepare and Push repo to GitHub pages
gulp.task('publish', ['bump', 'deploy']);
