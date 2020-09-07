// var john = {
//     name: 'John',
//     yearBirth: 1990,
//     job: 'teacher'
// }

// var Person = function(name, yearBirth, job){
//     this.name = name;
//     this.yearBirth = yearBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function(){
//     console.log(2020 - this.yearBirth);
// }

// Person.prototype.lastName = 'Smith';

// var jane = new Person('Jane', 2000, 'worker');
// var mark = new Person('Mark', 1970, 'bartender');

// jane.calculateAge();
// mark.calculateAge();

// console.log(jane.lastName);

//==== Primitive and Object ===== //

// bien thay doi
var a = 10;
var b = a; //create new in memory
a = 3;

console.log(a);
console.log(b);

//object khong thay doi
var obj1 = {
    name: "John",
    age: 30
}

var obj2 = obj1;
obj1.age = 21;

//use the same object in memory
console.log(obj1);
console.log(obj2);


//== Function
var age = 33;
var obj = {
    name: 'Rem',
    city: 'HCM'
}

function change (a, b){
    a = 22;
    b.city = 'KG';
}

change(age, obj);
//obj change, var not change
console.log(age);
console.log(obj);