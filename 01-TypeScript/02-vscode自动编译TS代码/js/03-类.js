// ts中书写js类，显示效果
(() => {
    class Person {
        // 定义一个构造器函数
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + "_" + this.lastName;
        }
    }
    // 实列化对象
    const person = new Person('诸葛', '卧虫');
    // 定义函数
    function showFullName(person) {
        return person.firstName + "_" + person.lastName;
    }
    console.log(showFullName(person));
})();
