/**
 模块分三类
    1) 系统模块 node中自带的模块 导入系统模块，直接写模块名
        let http = require('http');
    2）第三方模块 一些大牛写的模块 我们使用人家写的
        需要下载人家的模块，使用npm下载
    3) 我们自己写的模块 程序员自己写的模块
        必须以./ 或 ../ 打头
 */

console.log(require("./mka")); // { name: 'wc' }

let a = require("./mka");
console.log(a);                // { name: 'wc' }
console.log(a.name);           // wc



let utils = require("./util");
console.log(utils);
/**
  {
    formatTime: [Function: formatTime],
    sum: [Function: sum],
    PI: 3.141592653589793
  }
*/
console.log(utils.PI);
console.log(utils.sum(1, 2));
console.log(utils.formatTime());
/**
    3.141592653589793
    3
    2022-11-25
*/


let { PI, sum, formatTime } = require("./util");
console.log(PI);
console.log(sum(1, 2));
console.log(formatTime());
/**
    3.141592653589793
    3
    2022-11-25
*/




