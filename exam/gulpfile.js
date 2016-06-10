'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,
    plumber = require('gulp-plumber');


var sprite = require('gulp-sprite-generator');



var path = {
    build: { //??? ??? ?? ????? ?????????? ???
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: { //?? ??? ??? ?????
        html: 'src/*.html', //?????src/*.html ????gulp ?? ? ??? ??? ????? ???????.html
        js: 'src/js/script.js',//????? ????? ???????? ??? main ???
        style: 'src/css/**/*.scss',
        img: 'src/img/**/*.*', //?????img/**/*.* ?????- ??? ????? ?? ????? ? ????? ????? ?????
        fonts: 'src/fonts/**/*.*'
    },
    watch: { //??? ???, ? ????? ??? ??? ? ??? ?????
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/css/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};
var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};


gulp.task('images-retine', images);
 
function images(file) {
 
  console.log('Retinizing images...');
 
  return gulp.src(file && file.path || 'build/img/**/*.{png,jpg,jpeg}')
    .pipe(retinize(retinizeOpts))
    .on('error', function(e) {
      console.log(e.message);
    })
    .pipe(gulp.dest('build/retine/'))
  ;
 
}



gulp.task('html:build', function () {
    gulp.src(path.src.html) //??????? ? ??????
        .pipe(plumber())
        .pipe(rigger()) //???? ??? rigger
        .pipe(gulp.dest(path.build.html)) //?????? ????build
        .pipe(reload({stream: true})); //??????? ?? ??? ?? ?????
});

gulp.task('js:build', function () {
    gulp.src(path.src.js) //??? ?? main ??
        .pipe(plumber())
        .pipe(rigger()) //???? ??? rigger
        .pipe(sourcemaps.init()) //??????? sourcemap
        .pipe(uglify()) //??? ?? js
        .pipe(sourcemaps.write()) //???? ???
        .pipe(gulp.dest(path.build.js)) //??????????? ?build
        .pipe(reload({stream: true})); //??????? ???
});

gulp.task('style:build', function () {
    gulp.src(path.src.style) //?????? main.scss
        .pipe(sourcemaps.init()) //? ? ????? ??js
        .pipe(plumber())
        .pipe(sass()) //??????
        .pipe(prefixer()) //?????????????
        .pipe(cssmin()) //???
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css)) //??build
        .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img) //???????????
        .pipe(imagemin({ //??? ?
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img)) //???? ?build
        .pipe(reload({stream: true}));
});

gulp.task('sprites', function() {
    var spriteOutput;
 
    spriteOutput = gulp.src("./src/css/*.css")
        .pipe(sprite({
            baseUrl:         "./src/img/sprites/*.png",
            spriteSheetName: "sprite.png",
            spriteSheetPath: "/build/img"
        }));
 
    spriteOutput.css.pipe(gulp.dest("./build/css"));
    spriteOutput.img.pipe(gulp.dest("./dist/img/sprites"));
});




gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'image:build'
]);

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});