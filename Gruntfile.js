/*global module:false*/
module.exports = function(grunt) {
    'use strict';

    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });


    grunt.initConfig({
        /* Génération de css à partir de less */
        less: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'less',
                    src: ['*.less'],
                    dest: 'css/',
                    ext: '.css'
                }]
            },
        },


        autoprefixer: {
            options: {
                browsers: ['last 3 versions', 'ie 8', 'ie 9']
            },
            dev: {
                files: [{
                    expand: true,
                    src: ['css/*.css'],
                }]
            },
        },
/*
        useminPrepare: {
            html: 'src/index.html'
        },
        clean: {
            dist:['dist'],
        },
        copy: {
            dist: {
                src: 'src/index.html',
                dest: 'dist/index.html'
            }
        },

        rev: {
            options: {
                algorithm: 'md5',
                length: 5
            },
            dist: {
                files: [{
                    src: [
                        'dist/js/*.min.js',
                        'dist/css/*.min.css'
                    ]
                }]
            }
        },
        usemin: {
            html: ['dist/*.html'],
        }
*/
    });



// Tache LESS
    grunt.registerTask('less-autoprefix', [
        'less:dev',
        'autoprefixer:dev',
    ]);

/*
// Default task.
    grunt.registerTask('default', [
        'clean:dist',
        'copy:dist',
        'useminPrepare',
        'concat:generated',
        'uglify:generated',
        'cssmin:generated',
        'autoprefixer:dist',
        'rev:dist',
        'usemin',
    ]);*/
};