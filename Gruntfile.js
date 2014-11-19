module.exports = function(grunt){
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
              separator: '\n',
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
            main: {
                dist: ['dist/**/*']
            },
            dev: {
                dist: ['build/**/*']
            }
        },
        copy: {            
            main: {
                files: [                                    
                    {expand: true, cwd: 'app/api/', src: ['**'], dest: 'dist/api/'},                    
                    {expand: true, cwd: 'app/templates/', src: ['**'], dest: 'dist/templates/'},                    
                    {expand: true, cwd: 'app/assets/images/', src: ['**/*'], dest: 'dist/assets/images/'},                    
                    {expand: true, flatten: true, cwd: 'app/', src: ['*'], dest: 'dist/', filter: 'isFile'},                    
                ]
            },
            dev: {
                files: [
                    {expand: true, cwd: 'app/api/', src: ['**'], dest: 'build/api/'},                    
                    {expand: true, cwd: 'app/templates/', src: ['**'], dest: 'build/templates/'},                    
                    {expand: true, cwd: 'app/assets/images/', src: ['**/*'], dest: 'build/assets/images/'},                    
                    {expand: true, flatten: true, cwd: 'app/', src: ['*'], dest: 'build/', filter: 'isFile'},                    
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
                    'app/**/*.json',                    
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
    grunt.registerTask('serve-dev', ['express', 'watch']);        
    
    //  Defining Default Task
    grunt.registerTask('default', ['clean', 'concat', 'uglify', 'cssmin', 'copy:main', 'processhtml', 'htmlmin']);    
    
};