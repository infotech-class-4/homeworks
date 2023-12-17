var myStudent = {
    name: "Selma",
    class: "Backend1",
    school: "Noroff",
    grades: [50, 60, 70, 80, 90]
};
function average() {
    var sum = 0;
    for (var i = 0; i < myStudent.grades.length; i++) {
        sum += myStudent.grades[i];
    }
    return sum / myStudent.grades.length;
}
console.log(average());

if (average() >= 60) {
    console.log("pass");
} else {
    console.log("fail");
}