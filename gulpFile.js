var gulp = require('gulp');
// js
var browserify = require('browserify');
var uglify     = require('gulp-uglify');
var header     = require('gulp-header');

var collapse   = require('bundle-collapser/plugin');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');

/////////
/// pages
/////

var rootdirname = __dirname;

gulp.task('page-js', function(){
  var headerTxt = '/* ' + new Date().getFullYear() + '- generated at ' + new Date() + '\n*/';
  var browserifyOption = {
	    entries: './src/test.js',
	    extensions: ['.js'],
      NODE_ENV: 'production'
	    //debug: true,
	  };
	
	  var b = browserify(browserifyOption);
	  var bundler = b
	    .transform('partialify')
	    .transform('babelify', {
	      compact: "auto",
	        ignore: [],
	        presets: ['es2015', 'react']
	      });
	  
	  var rebundle = function() {
	    var rc = bundler.plugin(collapse)
	      .bundle()
	      .pipe(source('test.js'))
	      .pipe(buffer())
	      .pipe(uglify())
	      .pipe(header(headerTxt))
	      .pipe(gulp.dest(rootdirname));
	
	      return rc;
	    };
	  bundler = bundler.on('update', rebundle);
	  return rebundle();
});
	
gulp.task('page-css', function(){
  return 0;/*gulp.src("./pages/pages.less")
    .pipe(less())
    .pipe(rename('page.css'))
    .pipe(gulp.dest(rootdirname));*/
});

gulp.task('default',['page-js','page-css'],() => 0);
