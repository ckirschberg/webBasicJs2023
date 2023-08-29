import { Person } from './Person.js';

let person1 = new Person('Mikkel', 'Jacobsen');
let person3 = new Person('Amad', 'Kazmi');

let people = [person1, person3];
console.log(people);

let firstname = people[0].firstname;
console.log("I retrieved the first persons firstname and it is: " + firstname);

console.log(person1.email);



let numbers = [3, 2, 5, 8, 12, 38]
numbers.push(43);
console.log(numbers);



let myName = "Anna";
myName = 2;
let isHappy = true;


function add(a, b, c) {
    return a+b+c;
}
function average(a, b) {
    console.log((a+b)/2);
}

console.log("The average is: " + average(4,6) );
console.log("The result is: " + add(1,2,3));

let person = { 
    firstname: 'Christian',
    lastname: 'Kirschberg',
    email: 'kirs@cphbusiness.dk',
    getName: function() {
        return this.firstname + " " + this.lastname;
    }
 };
 let person2 = { 
    firstname: 'George',
    lastname: 'Nicolae',
    getName: function() {
        return this.firstname + " " + this.lastname;
    }
  }


  function areaRectangle(width, height) {
    return width*height;
  }

  function distance(speed, time) {
    return speed * time;
  }

  console.log("distance " + distance(50, 10));

let calculator = {
    owner: 'Paul',
    distance: function(speed, time) {
        return speed * time;
    },
    areaRectangle: areaRectangle
}


console.log("Calculator", calculator.areaRectangle(5,10));

person.age = 44;

console.log(person.getName());


const hubbleConstant = 1.243;

console.log(hubbleConstant);
console.log(myName);
