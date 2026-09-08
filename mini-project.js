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
addStudent("Charlie", 21, "ME");
console.log(students);