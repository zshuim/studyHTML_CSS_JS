let PI = Math.PI;

function formatTime() {
    return "2022-11-25";
}

function sum(num1,num2) {
    return num1 + num2;
}


// 导出 第一种方法
// exports.formatTime = formatTime;
// exports.sum = sum;
// exports.PI = PI;

// 导出 第二种方法
module.exports = {
    sum,
    PI,
    formatTime,
}