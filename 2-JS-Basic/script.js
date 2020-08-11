// /* Variable mutation and type coercion */

// var firstName = "Rem"
// var age = 22;

// //Type coercion
// console.log(firstName + " " + age);

// var job, isMarried;
// job = "Engineer";
// isMarried = false;

// console.log(firstName + " is a " + age + " years old "+ job+". Is she married? " + isMarried);

// //Variable mutation

// age = 'twenty two';
// job = "Gamer";

// //alert(firstName + " is a " + age + " years old "+ job+". Is she married? " + isMarried);

// var lastName = prompt('What is her last name?');
// console.log(firstName+ " "+ lastName);


/* Operator precedence = Toan tu uu tien   */


/* CODING CHALLENGE 1 */

// var massMark, heightMark, massJohn, heightJohn;
// massMark = 70;
// heightMark = 1.78;
// massJohn = 59;
// heightJohn = 1.8

// var bmiJohn, bmiMark;
// bmiMark = massMark / (heightMark * heightMark);
// bmiJohn = massJohn / (heightJohn * heightJohn);
// console.log(bmiMark, bmiJohn);

// var isBMIJohn_higher = bmiJohn > bmiMark;
// console.log("Is John's BMI higher than Mark's BMI? " + isBMIJohn_higher);

/*
The Ternary operator and switch statement 
*/

// var firstName = 'Rem';
// var age = 22;

// age >= 18 ? console.log('drink beer'):('drink juice');

// var drink = age >=18 ? 'beer':'water';
// console.log(drink);

// switch (true) {
//     case age >=5 && age < 18:
//         drink = 'water';
//         break;
//     case age > 18 && age <40:
//         drink = 'beer';
//         console.log(drink);
//         break;
//     case age >= 40 && age <=60:
//         drink = 'juice';
//         break;
//     default: drink = 'milk';
// }

// console.log(drink);

/*************************/
/*
    Truthy and Falsy values and equality operators
*/

// FALSY values: undefined, null, 0, '', NaN
// TRUTHY values: not FALSY values

var height = 23;

// if (height){
//     console.log('Variable is defined');
//     console.log(height);
// } else {
//     console.log('Variable is NOT defined');
//     console.log(height);
// }

// Equality operators === and ==

// if (height == '23'){
//     console.log('The == operator does type coercion');
// }

/*
   Function
*/

// function statement
// function calculateAge(yearAge){
//     return 2020 - yearAge;
// }
// var result = calculateAge(1998);
// console.log(result);

// //function expression

// var calculateAge_Expression = function(yearAge){
//     return 2020 - yearAge;
// };
// console.log(calculateAge_Expression(1990));


/*************************/
/*
    Array
*/

// var names = ['Rem', 'Lawliet'];
// var age = new Array(22, 29, 30);

// console.log(names.length);
// console.log(names);

// //Mutate array data
// names[1] = 'Nhung';
// names[names.length] = 'hihi';
// console.log(names);

// //Different data Array

// var different_data = new Array("mimi", 1998, true);
// console.log(different_data);

// //set data
// different_data.push('blue');
// console.log(different_data);
// different_data.unshift('red');
// console.log(different_data);

// //get data
// different_data.pop();
// console.log(different_data);
// different_data.shift();
// console.log(different_data);

// var isExiting = different_data.indexOf('mimi') == -1 ? "It's exiting" : "It's NOT exiting";

// console.log(isExiting);

/*************************/
/*
    CODING CHALLENGE 3
*/

// function tipCalculate(bill){
//     var percentage;
//     if (bill < 50){
//         percentage = .2;
//     }else if (bill >= 50 && bill <= 200){
//         percentage = .15;
//     }else if (bill>200){
//         percentage = .1;
//     }

//     return percentage*bill;
// }

// var bill = new Array(124, 48, 268);
// console.log(bill);
// var tip = new Array(tipCalculate(bill[0]), tipCalculate(bill[1]),tipCalculate(bill[2]));
// console.log(tip);
// var final_paid = new Array(bill[0]+tip[0], bill[1]+tip[1], bill[2]+tip[2]);
// console.log(final_paid);


/*************************/
/*
    Object and properties
*/
//Object literal
// var Rem = {
//     firstName: 'Nhung',
//     lastName: 'Nguyen',
//     birthYear: 1998,
//     family: ['Dad', 'Mom', 'Young Sister'],
//     job: 'Engineer'
// }
// console.log(Rem);
// console.log(Rem.firstName);

// var y = Rem.birthYear;
// console.log(y);
// var x = 'birthYear';
// console.log(Rem[x]);

// //new Object syntax
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1111;
// jane['lastName'] = 'Smith';
// console.log(jane);