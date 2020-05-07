/*
 * @Author: your name
 * @Date: 2020-05-06 10:51:15
 * @LastEditTime: 2020-05-06 13:44:41
 * @LastEditors: Please set LastEditors
 * @Description: TS的一些新特征
 * @FilePath: \lesson1d:\code\typescript\src\7.ts
 */
const username: string = "zhang99";

interface Bird {
  fly: Boolean;
  sing: () => {};
}

interface Dog {
  fly: Boolean;
  bark: () => {};
}

function trainAnim(animal: Bird | Dog) {
  animal.fly = true;
}



