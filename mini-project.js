let students = [
    { id: 101, name: "Alice", age: 20, department: "CSE"  },
    { id: 102, name: "Bob", age: 22, department: "EEE"  },
    
];

function addStudent(name, age, dept) {
    let newId = students.length > 0 ? students[students.length - 1].id + 1 : 101;
    let newStudent = { 
        id: newId, 
        name: name, 
        age: age, 
        department: dept 
    };
    students.push(newStudent);
    console.log("Student added successfully.");
}
addStudent("Shakib", 27, "MIS")
// addStudent("Charlie", 21, "ME");
// console.log(students);

function getAll() {
    for(const student of students){
    console.log(student)
    }
};

getAll();

function findStudent(id){
    for(let student of students){
        if(student.id == id){
            foundstdnt = student;
            break;
        }
    }
    if(foundstdnt){
        console.log("Found student: ", foundstdnt);
    } else{
        console.log("404 not found");
    }
}

findStudent(102);