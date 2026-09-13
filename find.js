let students = [
    {name: "Jadu", marks: 89},
    {name: "Kadu", marks: 87},
    {name: "Uadu", marks: 79},
];

let fruits = ["Apple", "Orange", "Banana","Coconut"];
let customFruits = fruits.find((f) => f.length > 5);
// console.log(customFruits);

let findFr = fruits.includes("Mango");
// console.log(findFr);

// let studentCheck = students.some((s) => s.marks > 80);
let studentCheck = students.every((s) => s.marks > 75);
console.log(studentCheck);