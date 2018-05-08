var gulp = require('gulp');
var download = require('gulp-download');
// var packageJSON = require('./package.json');
// TODO remove
var packageJSON = {
    'version': '4.9.5'
};
var source = [
	'http://core.svn.wordpress.org/tags/' + packageJSON.version + '/wp-admin/css/colors/_admin.scss',
	'http://core.svn.wordpress.org/tags/' + packageJSON.version + '/wp-admin/css/colors/_variables.scss',
	'http://core.svn.wordpress.org/tags/' + packageJSON.version + '/wp-admin/css/colors/_mixins.scss',
];

function downloadSource () {
    return download(source).pipe(gulp.dest('src/'));
}

module.exports = downloadSource();