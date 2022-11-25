// ts中书写js类，显示效果

(() => {
  interface IPerson {
    firstName: string; // 姓氏
    lastName: string; //名字
  }
  class Person {
    // 定义公共的字段（属性）
    firstName: string; // 姓氏
    lastName: string; // 名字
    fullName: string; // 姓名
    // 定义一个构造器函数
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = this.firstName + "_" + this.lastName;
    }
    }
    
    // 实列化对象
    const person = new Person('诸葛', '卧虫');
    // 定义函数
    function showFullName(person: IPerson) {
        return person.firstName + "_" + person.lastName
    }
    console.log(showFullName(person));
    
})();
