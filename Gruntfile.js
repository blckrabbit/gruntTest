/**
 * Created by Administrator on 2015/9/11.
 */
module.exports = function(grunt) {
    //Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify:{// 压缩js的配置
            options:{
                banner:'/*! create by <%= grunt.template.today("yyyy-mm-dd")%>*/\n'
            },
            static_mappings:{
                files:[{
                    src:'js/index.js',
                    dest:'build/index.min.js'
                },{
                    src:'js/main.js',
                    dest:'build/main.min.js'
                }]
            }

        },
        concat:{//合并js配置
            bar:{
                src:['build/*.js'],
                dest:'dest/all.min.js'
            }
        },
        watch:{//自动监听任务
            files:['js/*.js'],
            tasks:['uglify','concat']
        },
        jshint:{//检查js的错误
            all:['js/*.js']
        }
    });
    //加载包含“uglify"任务插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    //默认被执行的任务列表
    grunt.registerTask('default', ['jshint','uglify','concat','watch']);
};