// for of , for in
// let techStacks = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

// for (let tech of techStacks) {
//     console.log(`I am learning: ${tech}`);
// }

// let obj = {
//     name: "Taslim",
//     age: 25,
//     address: {
//         street: "123 Main St",
//         city: "Anytown",
//         state: "CA",
//         zip: "12345"
//     },
//     email: "aslam@example.com"
// };

// for (let ele in obj) {
//     // console.log(ele);
//     console.log(ele, "->", obj[ele]);
// }

// //break
// let marks = 50;
// for (let  i = marks ; i<=100; i++) {
//     if (i >60) {
//         break;
//     }
//     console.log(i);
// }

for (let i = 1; i < 15; i++) {
    if (i % 2 != 0) {
        continue;
    }
    console.log(i); 
};
