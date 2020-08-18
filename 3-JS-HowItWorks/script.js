/* ===== Lecture: Hoisting ====== */

// //Declaration Function
// calculateAge(1998);

// function calculateAge(year){
//     console.log(2020 - year);
// }


// //Expression Function ==> Error
// calculateAge(1998);
// const calculateAge = function(year){
//     console.log(2020 - year);
// }

//Variable

console.log(age); //undefine
var age = 22;

function foo() {
    console.log(age); //undefine
    var age = 65;
    console.log("age in function(executive context): " + age);
}

foo();
console.log("age executive in global context: " + age);