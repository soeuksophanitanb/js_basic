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
