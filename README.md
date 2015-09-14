# gruntTest
用于快速搭建grunt构建工具的测试例子
##这个是编译后的源代码，下载到本地后可以直接执行任务
>gruntTest的分支one的源代码为未编译过的代码
###任务一（检查js代码错误）
          grunt jshint
###任务二（压缩js代码然后把压缩后的文件放入bulid文件夹）
          grunt uglify
###任务三（合并压缩后的代码到dest文件夹里）
          grunt concat
###任务四（监听js文件夹下的所有js文件，js文件发生改变时，自动执行，压缩，跟合并任务）
          grunt watch
###直接输入grunt（默认执行grunt default任务，即以上三个任务都会被执行）
         grunt
