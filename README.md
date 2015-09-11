# gruntTest
用于快速搭建grunt构建工具的测试例子
#1 安装
npm install
#2 在目录下新建两个文件夹(其中bulid是用来装编译过的文件压缩文件，dest是用来装最终生成的合并压缩后的文件)
mkdir bulid
mkdir dest
#3运行所有任务，逐渐执行的任务是检查js，压缩js，合并js，自动监听文件改变执行任务
grunt default
#4执行单个任务
grunt jshint
grunt uglify
grunt concat
grunt watch
