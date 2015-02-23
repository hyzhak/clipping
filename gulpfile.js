var buffer = require('vinyl-buffer'),
    browserify = require('browserify'),
    del = require('del'),
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

gulp.task('compress-js', ['clean'], function() {
    browserify(paths.app)
        .transform(reactify)
        .bundle()
        .pipe(source('bundle.js')) // gives streaming vinyl file object
        .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest(paths.dest + '/src/'))
});

// Rerun tasks whenever a file changes.
gulp.task('watch', function() {
    gulp.watch(paths.css, ['css']);
    gulp.watch(paths.js, ['js']);
});

// The default task (called when we run `gulp` from cli)
gulp.task('default', ['watch', 'css', 'js']);

// Prepare and Push repo to GitHub pages
gulp.task('publish', ['css', 'compress-js']);