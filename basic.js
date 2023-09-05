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


let names = ["George", "Ana", "Aiste", "Justas", "Zeinab"];
console.log("First name is: " + names[0]);

names.push("Christian");
console.log(names);

let fewerNames = names.slice(1,3);
fewerNames.push("Mikkel")
console.log(fewerNames);

let personObject1 = {
    firstname: "Mikkel", 
    lastname: "Jacobsen", 
    email: "mikkel@jacobsen.dk"
};

let personObject2 = 
    new Person("Marian", "Mocanu", "marian@mocanu.dk");

let peopleObjects = [personObject1, personObject2];
console.log(peopleObjects);
console.log(peopleObjects[0].email);

function whoHasMyName(personObject, peopleArray) {
    return peopleArray.filter((person) => person.firstname === personObject.firstname)
}

let resultArray = whoHasMyName({firstname: 'Marian', lastname: 'Test'}, peopleObjects);
console.log(resultArray);

// Loops
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//
console.log("for of loop");
for(let aName of names) {
    console.log(aName);
}

let number = 20;
while(number > 10) {
    console.log("I love javascript");
    number = number - 1;
}

peopleObjects.forEach((person, index) => {
    console.log(person.firstname + " " + index);
});

console.log(names.indexOf("Christian"));

let arr = ['Peter', 7, 'Marianne', true, 'Helle', 8];
arr.forEach((el) => console.log(`${el} is a ${typeof el}`))


let time = 15;
let greeting = '';
if (time < 10) {
    greeting = 'Good morning';
} else if (time < 20) {
    greeting = 'Good afternoon';
} else {
    greeting = 'Good evening';
};

console.log(greeting);

let email = 'peternielsen@mail.dkfældksja';
let firstname2 = 'Peter';
let lastname = 'Nielsen';
if (
    email === 'peternielsen@mail.dk' || 
    firstname2 === 'Peter' && 
    lastname === 'Nielsen') {
        
        console.log("Take over the world");
    }

const number1 = 6;
const number2 = 2;

console.log("---------------------");
console.log("Is number1 larger than number2?");
if (number1 > number2) {
    console.log("Yes it is");
} else if (number1 === number2) {
    console.log("They are equal");
} else {
    console.log("No it is not");
}

let age = 18;
let alcohol = age >= 18;
console.log(alcohol);


let admin = undefined;
let result = age > 25 ? 'ACTIVE' : 'NOT ALLOWED';
console.log(result);

console.log("My random number is: " + (Math.floor(Math.random()*100)+1));