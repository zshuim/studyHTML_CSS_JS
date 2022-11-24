// 一个Js文件，就是一个模块
// 模块天生与世隔绝，铜墙铁壁
let name = 'wc';
let age = 18;
function sum() {
    return 18;
}

// 想其他模块使用name

/**
    exports是一个对象
    给这个对象上挂载一些属性
    挂载的属性，就是要导出的属性
*/
exports.name = name;