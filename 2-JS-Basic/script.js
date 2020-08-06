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

if (height){
    console.log('Variable is defined');
    console.log(height);
} else {
    console.log('Variable is NOT defined');
    console.log(height);
}

// Equality operators === and ==

if (height == '23'){
    console.log('The == operator does type coercion');
}
