const getPersonName = (person) => {
    console.log(person.name);
};
const setPersonName = (person, name) => {
    person.name = name;
};
const person = {
    name: 'dell',
    sex: 'male',
    say() {
        return 'hello';
    }
};
getPersonName(person);
setPersonName(person, 'lee');
