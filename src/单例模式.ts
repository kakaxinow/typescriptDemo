/*
 * @Author: your name
 * @Date: 2020-05-05 16:59:02
 * @LastEditTime: 2020-05-06 09:28:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lesson1d:\code\typescript\src\6.ts
 */
/**
 * 报错:Accessors are only available when targeting ECMAScript 5 and higher
 * 解决:tsc  demo.ts  -t  es5
 */
// class Animal {
//   constructor(private _name: string) {}

//   get name() {
//     return this.name + "lee";
//   }
//   set name(name: string) {
//     this._name = name;
//   }
// }

// const p = new Animal("dell");
// console.log(p.name);
// p.name = "zhang888";

/**
 * 用JS实现单例模式
 */

class Demo {
  private static instance: Demo;
  private constructor(public name: string) {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new Demo("hello dell666");
    }
    return this.instance;
  }

  static aa(): any {
    console.log(this.instance);
  }
}

const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();
console.log(demo1.name);
console.log(demo2.name);
