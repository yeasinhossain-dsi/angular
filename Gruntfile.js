module.exports = function(grunt){
	
	grunt.initConfig({
		concat: {
			options: {
			  separator: ';',
			},
			dist: {
			  src: [                                
                                //  Angular App files
				'scripts/app.js', 
				'scripts/controllers/controllers.js', 
				'scripts/directives/directives.js', 				
				'scripts/factories/factories.js', 				
				'scripts/services/services.js', 				
			  ],
			  dest: 'built.js',
			},
		},
		uglify: {
			my_target: {
				files: {
					'built.min.js': ['built.js']
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
};