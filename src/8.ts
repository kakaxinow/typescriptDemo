/*
 * @Author: your name
 * @Date: 2020-05-06 20:20:27
 * @LastEditTime: 2020-05-06 20:54:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lesson1d:\code\typescript\src\8.ts
 */
// 泛型
//写法1
function demo<T>(first: T) {
    return first;
}

//等价写法2
let returnDemo2: <T>(first: T) => T = demo;

function returnArray<T>(arr: T[]): T[] {
    return arr;
}


const num = demo<number>(10);

interface Human {
    name: string;
    age: number;
}


//Human不写也可以
//demo({name:'aaaa',age:123});
demo<Human>({name: 'aaaa', age: 123});

const rarr = returnArray<Human>([{name: 'aaaa', age: 123}]);
//console.log(rarr);

/**
 * 加法
 */
interface add {
    (a:number,b:number):number
}

interface anyadd<T>{
    (a:T,b:T):T
}

let numberAdd:add = (a1:number,b1:number)=>{
    return a1+b1;
}
let anyAdd:anyadd<String> = (a1:string,b1:string)=>{
    return a1+b1;
}