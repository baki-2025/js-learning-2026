let student = {
    name: "John Doe",
    id: 12345,
    marks: {
        Bangla: 55,
        English: 67,
        Mathematics: 76,
        Science: 81,
        Social_Science: 58,
        Physical_Education: 70
    }
};

let totalMarks = 0;
let totalSubjects = 0;

for (let subject in student.marks) {
    totalMarks += student.marks[subject];
    totalSubjects++;
}
// console.log("Total Marks:", totalMarks);
// console.log("Total Subjects:", totalSubjects);
// console.log(totalMarks,totalSubjects);
// console.log("Average Marks:", totalMarks / totalSubjects);

let averageMarks = totalMarks / totalSubjects;
if(averageMarks >= 80) {
    console.log("Grade: A");
} else {
    console.log("Grade: A-");
}