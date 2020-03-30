// Load plugins
const gulp = require("gulp");
const autoprefixer = require("autoprefixer"); /* css 밴더 프리픽스 */
// const browsersync = require("browser-sync").create();
const cp = require("child_process");
const cssnano = require("cssnano"); /* css 최적화 */
const del = require("del");
const eslint = require("gulp-eslint");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');

// BrowserSync (callback)
// function browserSync(done) {
//   browsersync.init({
//     server: {
//       baseDir: "./dist"
//     },
//     port: 3000
//   });
//   done();
// }
//
// // BrowserSync Reload (callback)
// function browserSyncReload(done) {
//   browsersync.reload();
//   done();
// }

// Clean assets
function clean() {
  return del(["./dist/"]);
}

// Optimize Images
function images() {
  return gulp
    .src("./src/img/**/*")
    .pipe(newer("./dist/img"))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [
            {
              removeViewBox: false,
              collapseGroups: true
            }
          ]
        })
      ])
    )
    .pipe(gulp.dest("./dist/img"));
}

// CSS task
function css() {
  return gulp
    .src("./src/scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }).on('error', sass.logError))
    .pipe(gulp.dest("./dist/css/"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("./dist/css/"))
    // .pipe(browsersync.stream());
}

// Watch files
function watchFiles() {
  gulp.watch("./src/scss/**/*", css);
  gulp.watch(
    [
      "./includes/**/*",
      "./layouts/**/*",
      "./pages/**/*",
      "./posts/**/*",
      "./projects/**/*"
    ],
  );
  gulp.watch("./src/img/**/*", images);
}

gulp.task('sourcemaps', function () {
 return gulp.src('./src/scss/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(sourcemaps.write('./')) // css와 동일 레벨에 .map 파일 생성
  .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.html', gulp.series('html'));
    gulp.watch("./dist/css/**/*", css);
    gulp.watch('./src/scss/**/*.scss', gulp.series('scss'));
    gulp.watch("./src/img/**/*", images);
});

// define complex tasks
const build = gulp.series(clean, gulp.parallel(css, images));
const watch = gulp.parallel(watchFiles);

// export tasks
exports.images = images;
exports.css = css;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = build;
