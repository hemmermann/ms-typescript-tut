const button = document.querySelector('button');

button?.addEventListener('click', () => {
    console.log('clicked');
})


const hobbies = ['sports','cooling'];
const activeHobbies = ['Hinking'];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const actH = ['football',...activeHobbies];
console.log(actH);

const person1 = {
 firstName: 'Max',
 age: 3.0
}

const copiedPerson = person1;

console.log(copiedPerson);

const copiedPerson1 = {...copiedPerson};

person1.age = 123;

console.log(copiedPerson);


const addNumber = (...numbers: number[]) => {
    return numbers.reduce((curRes,curValue) => {
        return curRes+curValue
    },0);
};

console.log('--------------------------------');
const addNumbers = addNumber(5,1,3,7,9,3.2);
console.log(addNumber);


const arrA = [1,2,3,4,5,6,7,8,9,11.1];

const example = (...numbers: number[]) => {
    return numbers.reduce((resVal,currVal) => {
        return resVal * currVal;
    });
};

const a = example(1,2,3,4,5);
console.log(example(a));

const [hobby1,hobby2,...arr] = arrA;

console.log(hobby1);
console.log(hobby2);
console.log(arr);

const { firstName,age } = person1