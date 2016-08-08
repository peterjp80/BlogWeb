var gulp = require('gulp');
var deploy = require('gulp-deploy-git');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*').pipe(ghPages());
})
 
gulp.task('publish', function() {
  return gulp.src('dist/**/*', { read: false })
    .pipe(deploy({
      repository: 'git@github.com:peterjp80/BlogWebArtifacts.git'
    }));
});