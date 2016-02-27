module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		sass: {
			options: {
	            sourceMap: false
	        },		    
		    dist: {
		       files: {
		              'deploy/css/main.css': 'source/sass/main.scss',
		       },
		    },
		},
		autoprefixer: {		    
		    dist: {
		       files: {
		             'deploy/css/main.css': 'deploy/css/main.css',
		       },
		    },
		},   

	    copy: {
		  dist: {
		  	files: [
			  	{
			  		expand: true, //habilita o cwd
			  		cwd: 'source/',	//relativo à source, mas não a inclui na cópia	  	
			  		src: 'vendor/*', 
			  		dest: 'deploy/'
			  	},
			  	{
			  		expand: true, //habilita o cwd
			  		cwd: 'source/',
			  		src: 'index.html', 
			  		dest: 'deploy/'}
			]        
		  }
		},

		//apenas para refenencia de como NÃO fazer
		/*copy: {
			dist: {
				 files: [
					{src: 'source/vendor/*', dest: 'deploy/vendor/'}
				]
			}
		},*/

	    clean: {
  			dist: {
    			src: ["deploy"]
  			}
		},

	    cssmin: {
		    dist: {
			 files: {
		          'deploy/css/main.css': 'deploy/css/main.css'
		       }
		    }
		},

	    uglify: {
		    options: {
		      mangle: true
		    },

		    dist: {
		      files: {
		        'deploy/javascript/app.min.js': [
		        'source/javascript/incrementButton.js', 
		        'source/javascript/date.js'
		        ]
		      }
		    },
		}


	});

    
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('deploy', ['clean', 'sass', 'autoprefixer', 'cssmin', 'uglify', 'copy'])


}