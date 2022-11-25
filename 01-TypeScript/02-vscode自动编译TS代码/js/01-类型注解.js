// 类型注解：一种轻量级的为函数或者变量添加的约束
(() => {
    function showMsg(str) {
        return "床前明月光，" + str;
    }
    let msg = "疑是地上霜";
    // msg 是一个数组
    // ! 类型“number[]”的参数不能赋给类型“string”的参数
    //   let msg = [1, 2, 3];
    console.log(showMsg(msg));
})();
