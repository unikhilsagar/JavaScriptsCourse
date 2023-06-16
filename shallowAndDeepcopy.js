let a = {name:'dinesh',skill:'full stack end',details:{
    age:28,
    maritalStatus:'married'
}}
let b = {...a};
b.name = 'venkat';
b.details.age = 32
console.log(a)