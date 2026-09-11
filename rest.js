function add(...numbers){
    // console.log(numbers);
    let total = 0;
    for(const num of numbers) {
        total+= num;
    }
    return total;
};

// console.log(add(1,2,3,4,5,6,7,100));

const obj = {
    name: "Tufan",
    age: 38,
    address: "Dhaka",
    occupation: "Developer",
};

const {name , ...remaining} = obj;
// console.log(remaining);

const arr = [7,8,9,100,200];
const [, , , ...rest] = arr;
// console.log(rest);

function something(one, ...remaining){
    console.log(one, remaining);
}

console.log(something("first", 1,2,3,4,5,7,8))