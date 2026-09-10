// const student = {
//     name: "Rahim" ,
//     age: 20,
//     address: "Dhaka"
// }

// const OldName = student.name

// const {age, address, name} = student

// console.log(name);

// const student1 = {
//     name: "Rahim" ,
//     age: 20,
//     address: {
//         city: "Dhaka",
//         zip: 131,
//     },
   
// }

// const {name: stdName,
//     address:{city, zip},
// } = student1;

// console.log(stdName,city);

const arr = ["Red", "Green", "Blue"];
const [first, second, third] = arr;

// console.log(second);

const student2 = {
    name: "Karim" ,
    age: 20,
    address: {
        city: "Raj",
        zip: 131,
    },
    hobbies: ["Gardenning", "Travelling", "Cooking"],
}

const {
    name: std2Name ,
    address: { city: stdCity },
    hobbies: [firstHobby]
} = student2;
console.log(firstHobby, stdCity);