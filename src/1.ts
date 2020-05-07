/*
 * @Author: your name
 * @Date: 2020-05-03 09:41:00
 * @LastEditTime: 2020-05-04 10:25:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lesson1d:\code\typescript\typescriptDemo\1.ts
 */
interface point {
  aa: number;
  bb: number;
}
// 基础类型
const str: string = "aaaa";

// 对象类型
class Person {}
const arrs: number[] = [1, 2, 3];
const dell: Person = new Person();
/**
 * 变量类型是个函数，返回值类型是number类型，后面是返回的具体实现
 */
const getTotal: () => number = () => {
  return 123;
};
