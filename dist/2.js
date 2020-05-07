let countInterface = 123;
let firstnumber = 1;
let secondnumber = 2;
const finalnumber = firstnumber + secondnumber;
function getTotal1(firstnumber, secondnumber) {
    return firstnumber + secondnumber;
}
function getTotal2({ first, second, }) {
    return first + second;
}
getTotal2({ first: 1, second: 2 });
