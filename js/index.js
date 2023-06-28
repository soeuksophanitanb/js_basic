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
