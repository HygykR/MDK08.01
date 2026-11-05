const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const rigger = require('gulp-rigger');

// Собираем HTML и подключаем шаблоны
function html() {
    return gulp.src('src/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('build'))
        .pipe(browserSync.stream());
}

// Компилируем SCSS в CSS
function css() {
    return gulp.src('src/scss/style.scss')
        .pipe(sass({ silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function'] }).on('error', sass.logError))
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.stream());
}

// Копируем Bootstrap JS
function js() {
    return gulp.src('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', { encoding: false })
        .pipe(gulp.dest('build/js'));
}

// Копируем картинки
function img() {
    return gulp.src('src/img/*.*', { encoding: false })
        .pipe(gulp.dest('build/img'))
        .pipe(browserSync.stream());
}

gulp.task('html', html);
gulp.task('css', css);
gulp.task('js', js);
gulp.task('img', img);

gulp.task('build', gulp.series('html', 'css', 'js', 'img'));

// Локальный сервер
gulp.task('serve', function () {
    browserSync.init({
        server: 'build'
    });

    gulp.watch(['src/*.html', 'src/template/*.html'], html);
    gulp.watch('src/scss/*.scss', css);
    gulp.watch('src/img/*.*', img);
});

gulp.task('default', gulp.series('build', 'serve'));
