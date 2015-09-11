/**
 * Created by Administrator on 2015/9/11.
 */
var index = index || {};
index = {
    name:"wenyang",
    innit : function(argument) {
        this.sayName();
    },
    sayName:function(argument){
        console.log(this.name);
    }
};
index.innit();