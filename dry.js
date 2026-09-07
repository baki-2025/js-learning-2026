//we build a order processing system to understand the DRY and how important a function is 

function isValidPrice(price) {
    return typeof price === 'number' && price >= 0;
};

function isValidEmail(email) {
    return  email.includes('@') && email.includes('.');
};

function calculateDiscount(price, discountPercent) {
    if (!isValidPrice(price)){
        return 0;
    }
    let discountAmount = (price * discountPercent)/ 100;
    return price - discountAmount;
}

function calculateFinalBill(price, vatPercent=15) {
    let vat = (price * vatPercent) / 100;
    return price + vat;
}

function formatBDT(amount) {
    return `${amount.toFixed(2)}BDT`;
}

function capitalized(str) {
    if(!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function processOrder(user,itemPrice,discountCode) {
    console.log(`...processing  order for : ${capitalized(user.name)} ...`);
    if(!isValidEmail(user.email)){
        console.log("Error: Invalid user email");
        return;
    }
    let currentPrice = itemPrice;
    if(discountCode == "NLB"){
        currentPrice = calculateDiscount(itemPrice, 20);
        console.log("20% discount applied");
    }
    
    let totalBill = calculateFinalBill(currentPrice);
    console.log("Final amount to pay :", formatBDT(totalBill));
    console.log("Order completed successfully");
}

let user1 = { name: "Shakib", email: "shakib@example.com" };

processOrder(user1, 2000, "NLB");