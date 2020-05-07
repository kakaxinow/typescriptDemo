/*
 * @Author: your name
 * @Date: 2020-05-03 13:27:13
 * @LastEditTime: 2020-05-05 15:43:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \lesson1d:\code\typescript\src\2.ts
 */
/**
 * ts类型推断，未显示声明变量的类型，但是通过第一次的赋值，就自动确定了该变量的类型
 */
let countInterface = 123;

let firstnumber = 1;
let secondnumber = 2;
const finalnumber = firstnumber + secondnumber; //这种情况下是不需要为变量申明类型的
/**
 * 这种情况下，是需要为参数声明类型的，不能用注解的方式
 * @param firstnumber
 * @param secondnumber
 */
function getTotal1(firstnumber: number, secondnumber: number): number {
  return firstnumber + secondnumber;
}

/**
 * 直接使用解构的参数，如果需要为解构的参数定义类型，需要这样做
 */
function getTotal2({
  first,
  second,
}: {
  first: number;
  second: number;
}): number {
  return first + second;
}

getTotal2({ first: 1, second: 2 });
