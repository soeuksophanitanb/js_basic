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
