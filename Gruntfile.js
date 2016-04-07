"use strict";

module.exports = function(grunt) {
	require("load-grunt-tasks")(grunt);

	grunt.initConfig({

		copy: {
			build: {
				expand: true,
				cwd: "src",
				src: [
					"fonts/**/*.{woff,woff2}",
					"img/*.{jpg,png,svg,gif}",
					"js/*.js",
					"*.html"
				],
				dest: "build",
			},
			js: {
				expand: true,
				cwd: "src/js/",
				src: "*.js",
				dest: "build/js",
			},
			img: {
				expand: true,
				cwd: "src/img/",
				src: "*.{jpg,png,gif,svg}",
				dest: "build/img",
			},
			html: {
				expand: true,
				cwd: "src",
				src: "*.html",
				dest: "build",
			}
		},

		clean: {
			build: ["build"],
			js: ["build/js/"]
		},

		less: {
			style: {
				files: {
					"build/css/style.css": "src/less/style.less"
				}
			}
		},

		uglify: {
			start: {
				files: {
					"build/js/script.min.js": ["build/js/*.js"]
				}
			}
		},

		postcss: {
			options: {
				processors: [
					require("autoprefixer")({browsers: [
						"last 1 version",
						"last 2 Chrome versions",
						"last 2 Firefox versions",
						"last 2 Opera versions",
						"last 2 Edge versions"
					]}),
					require("css-mqpacker")({
						sort: true
					})
				]
			},
			style: {
				src: "build/css/*.css"
			}
		},

		csso: {
			style: {
				options: {
					report: "gzip"
				},
				files: {
					"build/css/style.min.css": ["build/css/style.css"]
				}
			}
		},

		imagemin: {
			images: {
				options: {
					optimizationLevel: 3
				},
				files: [{
					expand: true,
					src: ["build/img/*.{png,jpg,gif,svg}"]
				}]
			},

		},

		svgstore: {
			options: {
				svg: {
					style: "display: none"
				}
			},
			symbols: {
				files: {
					"build/img/symbols.svg": ["src/img/symbols/*.svg"]
				}
			}
		},

		browserSync: {
			server: {
				bsFiles: {
					src: ["build/*.html", "build/css/*.css"]
				},
				options: {
					server: "build",
					watchTask: true,
					notify: true,
					open: true,
					ui: false
				}
			}
		},

		watch: {
			style: {
				files: ["src/less/**/*.less"],
				tasks: ["less", "postcss", "csso"],
				options: {spawn: false}
			},
			html: {
				files: ["src/*.html"],
				tasks: ["copy:html"],
				options: {spawn: false}
			},
			js: {
				files: ["src/js/*.js"],
				tasks: ["js"],
				opitons: {spawn: false}
			}
		},

		"gh-pages": {
			options: {
				base: "build"
			},
			src: ["**"]
		}
	});

	grunt.registerTask("build", [
		"clean:build",
		"copy:build",
		"uglify",
		"svgstore",
		"imagemin",
		"less",
		"postcss",
		"csso"
	]);

	grunt.registerTask("serve", [
		"browserSync",
		"watch"
	]);

	grunt.registerTask("start", [
		"build",
		"serve"
	]);

	grunt.registerTask("publish", [
		"build",
		"gh-pages"
	]);

	grunt.registerTask("js", [
		"clean:js",
		"copy:js",
		"uglify"
	]);

};
