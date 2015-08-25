module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['./javascripts/**/*.js']
    },
    sass: {
      dist: {
        files: {
          'styles/main.css': 'sass/main.scss'
        }
      }
    },
    connect: {
      uses_defaults: {}
    },
    watch: {
      javascripts: {
        files: ['./javascripts/**/*.js'],
        tasks: ['jshint']
      },
      sassy: {
        files: ['./sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'connect', 'watch']);
};
