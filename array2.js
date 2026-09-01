let name = ["Aslam", "Ali", "Khan"];
let number = [10, 20, 30, 40, 50];
// console.log(name[0], number[2]);

name.push("Ahmed", "Hassan");
name.pop();
name.shift();
name.unshift("Zain");
name.splice(2,0, "Usman", "Bilal");
name.splice(1, 2);
console.log(name);