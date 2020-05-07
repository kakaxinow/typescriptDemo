class Person2 {
    constructor() {
        this.name = "dell1";
    }
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
