var gulp = require('turris-gulp-tasks')([
    'serve',
    'build',
    'debug',
    'test',
    'cover',
], require('./config.js'));

gulp.task('default', ['debug', 'serve']);
