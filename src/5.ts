/*
 * @Author: zhang min
 * @Date: 2020-05-05 13:46:44
 * @LastEditTime: 2020-05-06 13:23:02
 * @LastEditors: Please set LastEditors
 * @Description: 类的定义和继承
 * @FilePath: \lesson1d:\code\typescript\typescriptDemo\5.ts
 */
class Person2 {
  name = "dell1";
  getName() {
    return this.name;
  }
}

class Teacher extends Person2 {
  getName() {
    return super.getName + "aaaaa";
  }

  getTeacherName() {
    return "dell2";
  }
}

const teacher = new Teacher();
console.log(teacher.getName());
console.log(teacher.getTeacherName());
