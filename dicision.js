// //if else , switch case, ternary
let age= 16
// if (age >= 18){
//     console.log("You are eligible to vote");
// }else{
//     console.log("You are not eligible to vote");
// }

let marks = 70
// if (marks >= 80 || marks >=90){
//     console.log("You got an A+ grade");
// }else if (marks >= 60){
//     console.log("You got a B grade");
// }else{
//     console.log("You got a C grade");
// }
//switch case

switch (true) {
    case marks >= 80:
        console.log("You got an A+ grade");
        break;
    case marks >= 60:
        console.log("You got a B grade");
        break;
    default:
        console.log("Inprovement needed");

}

//ternary condition? true : false
age >= 18 ? console.log("You are eligible to vote") : console.log("You are not eligible to vote");