# gruntTest
用于快速搭建grunt构建工具的测试例子
#1 安装
    npm install
##2 在目录下新建两个文件夹(其中bulid文件夹是用来装编译过的压缩文件，dest文件夹是用来装最终生成合并压缩后的文件)
    mkdir bulid
    mkdir dest
##3运行所有任务，逐步执行的任务是检查js，压缩js，合并js，监听文件改变来自动执行任务
    grunt default
##4执行单个任务
    grunt jshint
    grunt uglify
    grunt concat
    grunt watch
