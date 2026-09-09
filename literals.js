let price = 500;
let quantity = 3;

// console.log(`Total price: ${price*quantity}Taka\n pay to price to get it as your own`,);

function getDiscount(price){
    return price*0.1;
}

console.log(`You saved: ${getDiscount(price)} taka\n Your total bill is now ${(price*quantity)-getDiscount(price)} taka`,);


let stock = 1;

console.log(`Status: ${stock > 0  ? "In stock"+ " " + stock : "Out of stock"}`);