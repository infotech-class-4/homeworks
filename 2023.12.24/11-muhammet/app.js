var students = [
  {
    name: "ali",
    surname: "demir",
    school: "cumhuriyet",
    class: "7/B",
    notes: [40, 40, 50],
  },
  {
    name: "veli",
    surname: "kaya",
    school: "cumhuriyet",
    class: "7/B",
    notes: [80, 80, 50],
  },
  {
    name: "osman",
    surname: "ak",
    school: "cumhuriyet",
    class: "7/B",
    notes: [90, 80, 75],
  },
  {
    name: "mustafa",
    surname: "kara",
    school: "cumhuriyet",
    class: "7/B",
    notes: [67, 47, 43],
  },
  {
    name: "mehmet",
    surname: "yılmaz",
    school: "cumhuriyet",
    class: "7/B",
    notes: [83, 95, 45],
  },
];

//1. soru

function studentdelete(i) {
  if (i >= 0 && i < students.length) {
    students.splice(i, 1);
    console.log(`${i + 1} öğrenci başarıyla silindi`);
  } else {
    console.log("yanlış indis numarası girdiniz");
  }
}

studentdelete(2);
console.log(students);

console.log("---------------------------");

//2. soru
var students = [
  {
    name: "ali",
    surname: "demir",
    school: "cumhuriyet",
    class: "7/B",
    notes: [40, 40, 50],
  },
  {
    name: "veli",
    surname: "kaya",
    school: "cumhuriyet",
    class: "7/B",
    notes: [80, 80, 50],
  },
  {
    name: "osman",
    surname: "ak",
    school: "cumhuriyet",
    class: "7/B",
    notes: [90, 80, 75],
  },
  {
    name: "mustafa",
    surname: "kara",
    school: "cumhuriyet",
    class: "7/B",
    notes: [67, 47, 43],
  },
  {
    name: "mehmet",
    surname: "yılmaz",
    school: "cumhuriyet",
    class: "7/B",
    notes: [83, 95, 45],
  },
];

function average(studentIndex) {
  var total = 0;
  for (var i = 0; i < students[studentIndex].notes.length; i++) {
    total += students[studentIndex].notes[i];
  }
  return total / students[studentIndex].notes.length;
}

for (var x = 0; x < students.length; x++) {
  if (average(x) >= 60) {
    console.log(students[x].name + " pass");
  } else {
    console.log(students[x].name + " fail");
  }
}

console.log("---------------------------");

//3. soru

function updatestudentname(indis, newname) {
  if (indis > 0 && indis < students.length) {
    students[indis].name = newname;
    console.log("öğrenci adı başarıyla güncellendi");
  } else {
    console.log("geçersiz indis numarası girdiniz");
  }
}

updatestudentname(1, "musa");
console.log(students);
