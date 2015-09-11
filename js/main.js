/**
 * Created by Administrator on 2015/9/11.
 */
function demo(name) {
    this.name = name;
}
demo.prototype.getName = function () {
    console.log(this.name);
};
var newDemo = new demo('wen');
newDemo.getName();