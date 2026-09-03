let user = {
    name: "Aslam",
    age: 25,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    },
    email: "aslam@example.com"
};

// console.log(user["address"]["zip"]); 

// let entry = Object.entries(user);
// console.log(entry[0][1]); 

let student = [{
    name: "Ali",
    id: 123,
},{
    name: "Ahmed",
    id: 456,
},{
    name: "Bilal",
    id: 789,
    address: {
        street: "456 Oak Ave",
        city: "Rawalpindi",
        state: "Punjab",
        zip: "40000",
        options: ["aslam", "ali", "ahmed"]

    }
}];
console.log(student[2]["address"]["options"][1]);