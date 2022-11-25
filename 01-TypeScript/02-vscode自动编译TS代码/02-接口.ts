// 接口 ： 是一种能力，一种约束
(() => {
  interface IPerson {
    firstName: string; //姓氏
    lastName: string; //名字
  }
  // 输出姓名
  function showFullName(person: IPerson) {
    return person.firstName + "_" + person.lastName;
    }
    const person = {
      firstName: "东方",
      // 注释其中一个
      /**
            类型“{ lastName: string; }”的参数不能赋给类型“IPerson”的参数。
            类型 "{ lastName: string; }" 中缺少属性 "firstName"，但类型 "IPerson" 中需要该属性。
      */
      lastName: "不败",
    };

    console.log(showFullName(person));
    
})();
