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

// console.log(age); //undefine
// var age = 22;

// function foo() {
//     console.log(age); //undefine
//     var age = 65;
//     console.log("age in function(executive context): " + age);
// }

// foo();
// console.log("age executive in global context: " + age);

/* ===== Lecture: This keyword ====== */

//console.log(this);

var john = {
    name: 'John',
    yearBirth: 1990,
    calculateAge: function(){
        console.log(this);//method of object
        console.log(2020 - this.yearBirth);
        function innerFunction(){
            console.log(this);//regular function not method => window object
        }
        innerFunction();
    }
}

john.calculateAge();

var rem = {
    name: 'Rem',
    yearBirth: 1998,
}

rem.calculateAge = john.calculateAge; // method borrowing
rem.calculateAge();