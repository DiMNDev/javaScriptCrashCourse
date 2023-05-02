//alert("Hello World!");

//Console methods
console.log("This is a log");
console.error("This is an error");
console.warn("This is a warning");
//Defining constant variables of all types
const myName = "John";
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;
//Check our types
console.log(typeof x);

//Concatenation
console.log("My name is " + myName + ", I am " + age);
//Template String
console.log(`My name is ${myName}, I am ${age}`);

//String methods
const s = "Hello World";
console.log(s.toLocaleUpperCase());
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(" "));

//Arrays - variables that hold multiple values
const numbers = new Array(1, 2, 3, 4, 5); //New array constructor
console.log(numbers);
const fruits = ["apples", "oranges", "pears, strawberries"];
fruits.push("mangos", "kiwi");
fruits.unshift("blueberries");
fruits.pop();
console.log(Array.isArray("hello"));
console.log(fruits);
console.log(fruits.indexOf("oranges"));

//Object literals
const person = {
  firstName: "john",
  lastName: "doe",
  age: 30,
  hobbies: ["music", "code", "skate"],
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA",
  },
};
console.log(person.firstName, person.age);
//Destructure objects
const {
  firstName,
  lastName,
  address: { city },
} = person;

console.log(firstName, city);
//Manually adding items to an object
person.email = "johndoe@gmail.com";
console.log(person);

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isComplete: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isComplete: true,
  },
  {
    id: 3,
    text: "Dentist appt",
    isComplete: false,
  },
];

console.log(todos);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//For loop
for (let i = 0; i <= 10; i++) {
  console.log(`For: ${i}`);
}

//While loop
let i = 0;
while (i <= 10) {
  console.log(`While: ${i}`);
  i++;
}

//Loop arrays
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

//For..of loop
for (let todo of todos) {
  console.log(todo.text);
}

//forEach array method
todos.forEach((todo) => {
  console.log(todo.isComplete);
});

//map array method
const todoText = todos.map((todo) => {
  return todo.text;
});
console.log(`Todo text: ${todoText}`);
console.log(todoText);

//filter array method
const todoComplete = todos.filter((todo) => {
  return todo.isComplete === true;
});
console.log(`Todo text: ${todoComplete.text}`);
console.log(todoComplete);

//if statements
const n = 110;
const q = 10;

if (n > 10) {
  console.log("n is 10");
} else if (n > 10) {
  console.log("n is greater than 10");
} else {
  console.log("n is less than 10");
}

//ternary operator
const colorNumber = 10;
const color = colorNumber > 10 ? "red" : "blue";
console.log(color);
//switch statements
switch (color) {
  case "blue":
    console.log("color is blue");
    break;
  case "red":
    console.log("color is red");
    break;
  default:
    console.log("color is GONE!");
    break;
}
//standard function
function addNumsStandard(num1, num2) {
  console.log(num1 + num2);
}
addNumsStandard(4, 5);
//arrow function
const addNumsArrow = (num1, num2) => {
  return num1 + num2;
};
console.log(addNumsArrow(3, 4));

//constructive functions

function Animal(name, type, danger, dob) {
  this.name = name;
  this.type = type;
  this.danger = danger;
  this.dob = new Date(dob);
  this.getBirthYear = function () {
    return this.dob.getFullYear();
  };
  this.getFullName = function () {
    return `${this.name} ${this.type}`;
  };
}

Animal.prototype.makeNoise = function (noise) {
  return noise;
};

const newAnimal = new Animal("bob", "cat", false, "4-20-23");
console.log(newAnimal);
console.log(newAnimal.getBirthYear());
console.log(newAnimal.getFullName());
console.log(newAnimal.makeNoise("reeeett"));

//Class
class Student {
  constructor(fName, lName, dofb) {
    this.fName = fName;
    this.lName = lName;
    this.dofb = new Date(dofb);
  }
  getBirthedYear() {
    if (this.dofb.getFullYear() < 1969) {
      return "Too old";
    } else {
      return this.dofb.getFullYear();
    }
  }
  getFullName() {
    return `${this.fName} ${this.lName}`;
  }
}

const newStudent = new Student("Bilbo", "Baggins", "06-09-1969");
console.log(newStudent.getBirthedYear());
console.log(newStudent.getFullName());
