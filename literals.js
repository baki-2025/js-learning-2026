let price = 500;
let quantity = 3;

// console.log(`Total price: ${price*quantity}Taka\n pay to price to get it as your own`,);

function getDiscount(price){
    return price*0.1;
}

console.log(`You saved: ${getDiscount(price)} taka\n use this as an investment`);
