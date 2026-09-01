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
}
// console.log(user["name"]); //user[`${}`]
delete user.address;
user.address = {
    street: "456 Oak Ave",
    city: "Rawalpindi",
    state: "Punjab",
    zip: "40000"
};
// console.log(Object.entries(user));
console.log(Object.keys(user));
