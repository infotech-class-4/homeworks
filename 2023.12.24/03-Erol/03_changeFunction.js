// 3. Fonksiyona parametre olarak gelen indis numarasina gore ilgili ogrencini adina ulasip degistiren bir foksiyon olusturunuz.

var students = [
  {
    name: "Ahmet",
    surname: "Su",
    school: "I.O.O",
    class: "5/C",
    notes: [20, 90, 60],
  },
  {
    name: "Erol",
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

function changeStudentName(index, newName) {
  if (index >= 0 && index < students.length) {
    students[index].name = newName;
    console.log("Öğrenci adı değiştirildi. Yeni ad:", newName);
  } else {
    console.log("Geçersiz indis numarası.");
  }
}

changeStudentName(2, "Mehmet");
console.log(students);
