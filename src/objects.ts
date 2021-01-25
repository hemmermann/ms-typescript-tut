const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number,string]
} = {
    name: 'Maxmilian',
    age: 30,
    hobbies: ['Sports','Cooking'],
    role: [1,'author']
};

let favoriteActivities: string[];

favoriteActivities = ['Football','Hockey']

person.role.push('admin');
person.role[1] = 'porshe';

console.log(person.age);

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}

for(const role of person.role){
    console.log(role)
}

const ADMIN = 0;
const READONLY = 1;
const AUHTOR= 2

enum Role {
    ADMIN,READ_ONLY,AUHTOR
}

const user = {
    name: 'pepa',
    age: 30,
    hobbies: ['sport','cookings'],
    role: Role.ADMIN
}

if(user.role === Role.ADMIN){
    console.log('ADMIN')
}