let fruits = ["Apple", "Orange", "Banana","Coconut"];

// let newFruits = fruits.forEach((f, idx) =>{
//     console.log(`${idx+1} -> ${f}`); 
//     // return (`${idx+1} -> ${f}`);for-each can't return
// });
// // console.log(newFruits);

// let newFruits2 = fruits.map((f, idx) =>{
//     //  console.log(`${idx+1} -> ${f}`); 
//      return (`${idx+1} -> ${f}`);
// });
//  console.log(newFruits);

// let newFruits2 = fruits.map((f) => f.toLowerCase());
// console.log(newFruits2, "\n", fruits);

let customFruits = fruits.filter((f) => f.length > 5);
console.log(customFruits);