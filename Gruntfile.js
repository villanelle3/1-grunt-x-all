module.exports = function(grunt) {
    grunt.initConfig({

        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: './assets/sass',
                    src: ['*.scss'],
                    dest: './css',
                    ext: '.css'
                }]
            }
        },

        watch: {
            css: {
                files: './assets/sass/*.scss',
                tasks: ['sass', 'cssmin'],
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: './css',
                    src: ['*.css', '!*.min.css'],
                    dest: './css',
                    ext: '.min.css'
                }]
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    './scripts/*.min.js' : ['./scripts/*.js']
                }
            }
        }
        
    });

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', 'watch');
};