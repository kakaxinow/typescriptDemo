/**
 * Interface接口
 * 可能会有定义之外的不确定参数，这时候就需要
 */
interface Person {
    name:string;
    age?:string;
    [propName:string]:any;
    say():string;
}

const getPersonName = (person: Person): void => {
    console.log(person.name);
}

const setPersonName = (person: Person, name: string): void => {
    person.name = name;
}

const person = {
    name: 'dell',
    sex: 'male',
    say() {
        return 'hello'
    }
};

getPersonName(person);
setPersonName(person,'lee');