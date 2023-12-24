// 1. Fonksiyon parametre olarak gelen indis numarasina gore ilgili ogrenciyi silen bir fonksiyon olusturunuz.

// Birinci Yöntem
var students = [
  {
    name: "Ali",
    surname: "Su",
    school: "I.O.O",
    class: "5/C",
    notes: [20, 90, 60],
  },
  {
    name: "Veli",
    surname: "Tahta",
    school: "I.O.O",
    class: "5/C",
    notes: [20, 10, 80],
  },
  {
    name: "Murat",
    surname: "Altin",
    school: "I.O.O",
    class: "5/C",
    notes: [20, 60, 70],
  },
  {
    name: "Kasim",
    surname: "Tunc",
    school: "I.O.O",
    class: "5/C",
    notes: [80, 90, 70],
  },
  {
    name: "Niyazi",
    surname: "Bakir",
    school: "I.O.O",
    class: "5/C",
    notes: [10, 20, 90],
  },
];

function deleteStudent(indixNummerOfStudent, numberOfElementsToDelete) {
  return students.splice(indixNummerOfStudent, numberOfElementsToDelete);
}

deleteStudent(0, 1);

console.log(students);

// Ikinci Yöntem

var students2 = [
  {
    name: "Ali",
    surname: "Su",
    school: "I.O.O",
    class: "5/C",
    notes: [20, 90, 60],
  },
  {
    name: "Veli",
    surname: "Tahta",
    school: "I.O.O",
    class: "5/C",
    notes: [20, 10, 80],
  },
  {
    name: "Murat",
    surname: "Altin",
    school: "I.O.O",
    class: "5/C",
    notes: [20, 60, 70],
  },
  {
    name: "Kasim",
    surname: "Tunc",
    school: "I.O.O",
    class: "5/C",
    notes: [80, 90, 70],
  },
  {
    name: "Niyazi",
    surname: "Bakir",
    school: "I.O.O",
    class: "5/C",
    notes: [10, 20, 90],
  },
];

let elementToDelete = students2[0];

let newStudents = students2.filter(function (elementInStudentArray) {
  return elementInStudentArray !== elementToDelete;
});

students2 = newStudents;
console.log(students2);
