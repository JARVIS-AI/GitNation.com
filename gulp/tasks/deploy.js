const gulp = require('gulp');
const ftp = require('vinyl-ftp');
const minimist = require('minimist');
const gutil = require('gulp-util');
const args = minimist(process.argv.slice(2));

gulp.task('deploy', function() {
  var remotePath = '/';
  var conn = ftp.create({
    host: 'gold.elastictech.org',
    user: args.user,
    password: args.password,
    log: gutil.log
  });

  return gulp.src(['./build/**/*.*'])
    .pipe(conn.differentSize(remotePath))
    .pipe(conn.dest(remotePath));
});
