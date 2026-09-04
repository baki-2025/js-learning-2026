let marks = [50, 60, 70, 80, 90, 100];

let max = marks[0];

for (let i = 1; i < marks.length; i++) {
    if (marks[i] > max) {
        max = marks[i];
    }
}
console.log(max);