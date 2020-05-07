function demo(first) {
    return first;
}
let returnDemo2 = demo;
function returnArray(arr) {
    return arr;
}
const num = demo(10);
demo({ name: 'aaaa', age: 123 });
const rarr = returnArray([{ name: 'aaaa', age: 123 }]);
let numberAdd = (a1, b1) => {
    return a1 + b1;
};
let anyAdd = (a1, b1) => {
    return a1 + b1;
};
