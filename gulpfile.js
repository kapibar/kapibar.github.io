var gulp      = require('gulp'),
browsersync   = require('browser-sync'),
sass          = require('gulp-sass'),
rename        = require('gulp-rename'),
autoprefixer  = require('gulp-autoprefixer'),
concat        = require('gulp-concat'),   
uglify        = require('gulp-uglifyjs');

gulp.task('browser-sync', function() {
	browsersync({
		server: {
			baseDir: 'app'
		},
				
		notify: false		
	})
});

gulp.task('sass', ['browser-sync'], function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass({ outputStyle: 'expanded' }).on("error", sass.logError))
	// .pipe(rename({ suffix: '.min', prefix : '' }))
	// .pipe(autoprefixer(['last 15 versions']))
	// .pipe(cleanCss())
	.pipe(gulp.dest('app/css'))
	.pipe(browsersync.reload( {stream: true} ))
});

gulp.task('js', function() {
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js', 
		'app/libs/mmenu/dist/jquery.mmenu.all.js'		
		])
	.pipe(concat('libs.min.js'))
	.pipe(uglify()) 
	.pipe(gulp.dest('app/js'))
	.pipe(browsersync.reload({ stream: true }))
});

gulp.task('watch', ['sass', 'js'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['js']);
	gulp.watch('app/*.html', browsersync.reload)
});

gulp.task('default', ['watch']);

