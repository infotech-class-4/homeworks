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

function average(students) {
  for (let i = 0; i < students.length; i++) {
    let noteSumOfStudent = 0;
    for (let j = 0; j < students[i].notes.length; j++) {
      noteSumOfStudent += students[i].notes[j]; // Hata düzeltildi
    }
    students[i].average = noteSumOfStudent / students[i].notes.length; // Ortalama hesaplandı
    passFail(students[i].average, i);
  }
}

function passFail(average, indexOfStudent) {
  if (average >= 60) {
    students[indexOfStudent].passFail = "Gecti";
  } else {
    students[indexOfStudent].passFail = "Kaldi";
  }
}

average(students);
console.log(students);
