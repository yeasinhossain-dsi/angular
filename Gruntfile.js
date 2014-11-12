module.exports = function(grunt){
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
              separator: ';',
            },
            dist: {
              src: ['app/scripts/**/*.js'],
              dest: 'dist/scripts/built.js',
            },
        },
        uglify: {
            js: {
                files: {
                    'dist/scripts/built.min.js': ['dist/scripts/built.js']
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'dist/assets/css/style.min.css': ['app/assets/css/*.css']
                }
            }
        },
        clean: {
            dist: ['dist/**/*']
        },
        copy: {
            main: {
                files: [                
                    //  Copy API
                    {expand: true, cwd: 'app/api/', src: ['**', '.htaccess'], dest: 'dist/api/'},
                    
                    //  Copy all the template files
                    {expand: true, cwd: 'app/templates/', src: ['**'], dest: 'dist/templates/'},
                    
                    //  Copy all the images
                    {expand: true, cwd: 'app/assets/images/', src: ['**/*'], dest: 'dist/assets/images/'},
                    
                    //  Copy files in the app folder
                    {expand: true, flatten: true, cwd: 'app/', src: ['*'], dest: 'dist/', filter: 'isFile'},                    
                ]
            }
        },
        processhtml: {
            dist: {
                files: {
                    'dist/index.html': ['dist/index.html']
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'dist/index.html'                    
                }
            }
        },        
        //  Server Configuration
        express: {
            server: {
                options: {
                    port: 4200,
                    hostname: '127.0.0.1',
                    bases: ['app'],
                    open: true,
                    livereload: true
                }
            }
        },
        watch:{ //  For live Reload
            options: {livereload: true},
            scripts: {
                files: [
                    'app/**/*.html',
                    'app/**/*.js',
                    'app/**/*.css',                    
                ]                
            }
        }
    });
    
    //  Loading grunt plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');      
    grunt.loadNpmTasks('grunt-express');    
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    //  Defining development server taks
    grunt.registerTask('serve', ['express', 'watch']);    
    
    //  Defining Default Task
    grunt.registerTask('default', ['clean', 'concat', 'uglify', 'cssmin', 'copy', 'processhtml', 'htmlmin']);    
    
};