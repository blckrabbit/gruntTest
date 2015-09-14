/**
 * Created by Administrator on 2015/9/11.
 */
module.exports = function(grunt) {
    //Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),//引入package.json文件
        uglify:{// 压缩js的配置
            options:{
                banner:'/*! create by <%= grunt.template.today("yyyy-mm-dd")%>*/\n'//压缩后文件里的第一行会添加这一行注释
            },
            static_mappings:{
                files:[{
                    src:'js/index.js',//js的位置
                    dest:'build/index.min.js' //js编译后要放的位置
                },{
                    src:'js/main.js',
                    dest:'build/main.min.js'
                }]
            }

        },
        concat:{//合并js配置
            bar:{
                src:['build/*.js'],//要合并的js文件（这里指定了build文件夹下的所有后缀为js的文件）
                dest:'dest/all.min.js'//合并后把js文件起了一个名为“all.min.js”然后放入文件夹dest下
            }
        },
        watch:{//自动监听任务
            files:['js/*.js'],//要监听的js文件（这里指的是监听js下的所有后缀为js的文件）
            tasks:['uglify','concat']//js文件发生改变时，要执行的任务，这里配置执行的任务为uglify（压缩js）concat（合并js）
        },
        jshint:{//检查js的错误
            all:['js/*.js']//配置要检查的js文件（这里指的是js文件夹下所有后最为js的文件）
        }
    });
    //加载包含“uglify"任务插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //加载包含“concat"任务插件
    grunt.loadNpmTasks('grunt-contrib-concat');
    //加载包含“watch"任务插件
    grunt.loadNpmTasks('grunt-contrib-watch');
    //加载包含“jshint"任务插件
    grunt.loadNpmTasks('grunt-contrib-jshint');

    //默认被执行的任务列表
    grunt.registerTask('default', ['jshint','uglify','concat','watch']);
};