/*
    全局对象实际上是模块中的变量，只是每个模块都有，看起来像是全局变量
    __dirname __filename export moudle require()
 */


// __dirname: f:\代码练习\studyHTML_CSS_JS\笔记
console.log(__dirname);

// __filename: f:\代码练习\studyHTML_CSS_JS\笔记\4-node全局对象.js
console.log(__filename);

// process:本意是进程 提供了进程中相关的信息，如node运行环境，传递参数。。。
console.log(process);

// JS = ES + DOM + BOM
// node是JS(ES)的运行环境

// 定时器 setTimeout setInterval setImmediate
// setImmediate 是宏任务
console.log("Starting");

setImmediate(() => {
    console.log("setImmediate ~ ");
})
setTimeout(() => {
    console.log("setTimeout ~ ");
}, 0)
console.log("End...");
/**
结果：Starting
      End...
      setTimeout ~
      setImmediate ~ 
 */
