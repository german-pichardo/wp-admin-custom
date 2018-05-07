var gulp = require('gulp');
var download = require('gulp-download');
var packageJSON = require('./package.json');

var source = [
	'http://core.svn.wordpress.org/tags/' + packageJSON.version + '/wp-admin/css/colors/_admin.scss',
	'http://core.svn.wordpress.org/tags/' + packageJSON.version + '/wp-admin/css/colors/_variables.scss',
	'http://core.svn.wordpress.org/tags/' + packageJSON.version + '/wp-admin/css/colors/_mixins.scss',
];

gulp.task('default', function () {
	return download(source).pipe(gulp.dest('src/'));
});
