/*jshint node:true */
module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-jscs');

	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: true
			},
			all: ['*.js', '{src,test}/**/*.js']
		},
		jscs: {
			all: '<%= jshint.all %>'
		},
		qunit: {
			all: 'test/*.html'
		}
	});

	grunt.registerTask('test', ['jshint', 'jscs', 'qunit']);
	grunt.registerTask('default', 'test');
};
