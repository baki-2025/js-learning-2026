let cart = ["rice", "oil"];
cart.push("egg");
// console.log(cart);

let cart2 = [...cart];
// console.log(cart,cart2);

const personalInfo = {
    name: "Ratul",
    age: 23 ,
};
 const contactInfo = {
    email: "ratul26@gmail.com",
    phone: "01745435666" ,
 };

 const fullProfile = {
    ...personalInfo,
    ...contactInfo,
    zip: "556575",
 };

 console.log(fullProfile);