module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            dev: {
                options: {
                    compress: true,
                    cleancss: true,
                    optimization: 2
                    //sourceMap: true
                },
                files: [{
                    expand: true,
                    cwd: 'css/less/',
                    src: ['*.less'],
                    dest: 'css/',
                    ext: '.css'
                }]
            }
        },
        watch: {
            style: {
                files: ['css/less/*.less'],
                tasks: ['less', 'autoprefixer'],
                options: {
                    nospawn: true
                }
            },
            script: {
                files: ['js/tpl/*.js'],
                tasks: ['react']
            }
        },
        react: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'js/tpl/',
                    src: ['*.js'],
                    dest: 'build/',
                    ext: '.js'
                }]
            }
        },
        autoprefixer: {
            dev: {
                options: {
                    browsers: ['last 2 versions', 'ie 8', 'ie 9']
                },
                src: 'css/*.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-autoprefixer');
}
