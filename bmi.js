const weight = process.argv[2]; 
const height = process.argv[3];

calculateBMI(weight, height);

function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    console.log(`Your BMI is: ${bmi}`);
}