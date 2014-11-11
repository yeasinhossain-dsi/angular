module.exports = function(grunt){
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
              separator: ';',
            },
            dist: {
              src: ['scripts/**/*.js'],
              dest: 'dist/built.js',
            },
        },
        uglify: {
            js: {
                files: {
                    'dist/built.min.js': ['dist/built.js']
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'dist/style.min.css': ['assets/css/style.css']
                }
            }
        }
    });
    
    //  Loading grunt plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    //  Defining Default Task
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
    
};