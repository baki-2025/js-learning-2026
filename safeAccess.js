let user1 = {
    name: "Karim",
    address: {
        city: "Dhaka",
    },
};

let user2 = {
    name: "Rahim",

}
//optional chaining?

console.log(user1.address.city);
console.log(user2?.address?.city);

//nulish collescing??
console.log(user2?.address?.city?? "Rajshahi");

