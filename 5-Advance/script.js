var john = {
    name: 'John',
    yearBirth: 1990,
    job: 'teacher'
}

var Person = function(name, yearBirth, job){
    this.name = name;
    this.yearBirth = yearBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    console.log(2020 - this.yearBirth);
}

Person.prototype.lastName = 'Smith';

var jane = new Person('Jane', 2000, 'worker');
var mark = new Person('Mark', 1970, 'bartender');

jane.calculateAge();
mark.calculateAge();

console.log(jane.lastName);