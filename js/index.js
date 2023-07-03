console.log("Hello World");

let name = "sophanit";
let userName = "@sophanit";
console.log(name, userName);

const person = {
  name: "Sophanit",
  age: 22,
  gender: "Male",
};

console.log(person.name, person["name"]);

const arr = [1, 2, 3];
console.log(arr, arr[1]);

// performing function
function greet(name) {
  console.log("Hello " + name);
}

greet("Sophanit");

// calculate function
function calculate(a, b) {
  return a + b;
}

console.log(calculate(2, 3));

function createPerson(name, age) {
  return {
    name,
    age,
    isStudent: true,
  };
}

function CreateUSer(name, age) {
  this.name = name;
  this.age = age;
  this.isStudent = true;
}

const strange = new CreateUSer("Dr Strange", 24);

const sophanit = createPerson("sophanit", 22);
const johnwick = createPerson("johnwick", 22);

johnwick.isStudent = false;

console.log(sophanit, johnwick, strange);

for (let key in strange) {
  console.log(key, strange[key]);
}

console.log("====Here is the User====");
for (let element of Object.keys(strange)) {
  console.log(element, strange[element]);
}

let point = 30;
if (point < 10) console.log("Failed");
if (point < 20) console.log("E");
if (point < 30) console.log("D");
if (point < 40) console.log("C");

const number = [1, 2, 3, 4, 5, 6, "a", "b"];
for (let element of number) console.log(element);

let role = "manager";

switch (role) {
  case "student":
    console.log("Student!");
    break;
  case "teacher":
    console.log("Teacher!");
    break;
  case "manager":
    console.log("Manager!");
    break;
}

let count = 0;

do {
  console.log("Count is :", count + 1);
  count++;
} while (count < 10);

let num = 0;

while (num < 10) {
  console.log("Num ", num + 1);
  num++;
}

// ternary operator

let score = 10;
let grade = score < 100 ? "F" : "Pass";
console.log(grade);

let a = false,
  b = true;

let isTrue = a && b;
let isFail = !isTrue;
console.log(isFail);

let time = 12;
if (time >= 6 && time < 12) console.log("Good Morning");
else if (time >= 12 && time < 17) console.log("Good Afternoon");
else if (time >= 5 && time < 21) console.log("Good Evening");
else console.log("Good Night");

for (let i = 1; i <= 5; i++) {
  console.log(i, "Hello AnB School");
}

const staff = {
  name: "John",
  age: 22,
};

for (let key in staff) console.log(key, staff[key]);

const newArr = [1, 2, 3, 4, 5];
for (let element of newArr) console.log(element);

function minMax(a, b) {
  return a > b ? a : b;
}

console.log("Here is ", minMax(1, 2));

function isLandscape(width, height) {
  return width < height ? "is Portrait" : "is Landscape";
}

console.log(isLandscape(200, 300));

function fizzBuzz(number) {
  if (typeof number !== "number") return "Not a Number";
  if (number % 3 === 0 && number % 5 === 0) return "fizzbuzz";
  if (number % 3 === 0) return "fizz";
  if (number % 5 === 0) return "buzz";
  return number;
}

console.log(fizzBuzz("4"));

function speedLimit(speed, limit) {
  let point = 0;
  if (speed <= limit + 5) return "ok";
  // let result = speed - limit;
  // for (let i = 1; i <= result; i++) {
  //   if (i % 5 === 0) {
  //     point++;
  //   }
  // }
  // if (point > 12) return "Licence Sus!";
  // return point;
  let result = Math.floor((speed - limit) / 5);
  if (result >= 12) return "License Suspended";
  return result;
}

console.log(speedLimit(71, 70));

function findNum(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) console.log(i, "Even");
    else console.log(i, "Odd");
  }
}

findNum(10);

const arrr = [0, 2, 3, 4, "", 1];
function countTrusy(arr) {
  let count = 0;
  for (let element of arrr) {
    if (element) count++;
  }
  console.log("There are ", count);
}

countTrusy(arrr);

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      console.log(key, obj[key]);
    }
  }
}

const wick = {
  name: "wick",
  age: 12,
  city: "PP",
  birthYear: 2001,
  username: "@wick",
};
showProperties(wick);

function sumNum(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }
  return sum;
}
console.log(sumNum(10));

const scores = [90, 80, 50];
function calMark(score) {
  let total = 0;
  let msg = "";
  for (let element of score) {
    total += element;
  }
  let avg = total / 3;
  if (avg < 60) return (msg = "F");
  if (avg < 70) return (msg = "D");
  if (avg < 80) return (msg = "C");
}

console.log(calMark(scores));

function showStar(row) {
  for (let i = 0; i < row; i++) {
    let pattern = "";
    for (let j = 0; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

showStar(10);

function findPrime(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 1 === 0 && i % i === 0) console.log(i);
  }
}

findPrime(10);

const myArr = [1, 2, 3, 4];
myArr.splice(myArr.indexOf(3), 0, "a", "b");
console.log(myArr);

const obj = [
  {
    id: 1,
    name: "nit",
  },
  {
    id: 2,
    name: "wick",
  },
];

console.log(obj.find((person) => person.name === "wick"));

const msg = "Hello there";
console.log(msg.split(" ").join("-"));
