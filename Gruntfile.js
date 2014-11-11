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
        copy: {
            main: {
                files: [                
                    //  Copy API
                    {expand: true, cwd: 'app/api/', src: ['**'], dest: 'dist/api/'},
                    //  Copy all the template files
                    {expand: true, cwd: 'app/templates/', src: ['**'], dest: 'dist/templates/'},
                    //  Copy all the images
                    {expand: true, cwd: 'app/assets/images/', src: ['**/*'], dest: 'dist/assets/images/'},
                    //  Copy files in the app folder
                    {expand: true, flatten: true, cwd: 'app/', src: ['*'], dest: 'dist/', filter: 'isFile'},                    
                ]
            }
        }
    });
    
    //  Loading grunt plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    //  Defining Default Task
    grunt.registerTask('build', ['concat', 'uglify', 'cssmin', 'copy']);
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
    
};