let products = [
    {title: "Mouse", price:500, inStoke: true},
    {title: "Keyboard", price:1500, inStoke: false},
    {title: "Monitor", price:7000, inStoke: true},
    {title: "Headphone", price:400, inStoke: true}
];

let totalPrice = products.reduce((acc , current) => {
  return (acc += current.price);
},0);

// console.log(totalPrice);

// let sorted = products.sort();
// let sorted = [10, 20 ,50 ,700 ,35, 999].sort((a,b) => a - b );
// let sorted = [10, 20 ,50 ,700 ,35, 999].sort((a,b) => b - a );
// let sorted = products.sort((a,b) => a.price - b.price );asending
// let sorted = products.sort((a,b) => b.price - a.price );
// console.log(sorted);

let estPrice = products.filter((p) => p.inStoke == true).reduce((acc, cur) =>{
    return (acc += cur.price);
},0 );

console.log(estPrice);