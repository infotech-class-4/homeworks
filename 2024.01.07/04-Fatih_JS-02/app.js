// ODEV-1 DELETE FONKSIYONU

let students = [
  {
    name: "Ahmet",
    surName: "Erkan",
    school: "I.O.O",
    class: "5/C",
    notes: [50, 60, 70]
  },
  {
    name: "Mehmet",
    surName: "Veli",
    school: "I.O.O",
    class: "5/C",
    notes: [40, 60, 30]
  },
  {
    name: "Hakan",
    surName: "Kaplan",
    school: "I.O.O",
    class: "5/C",
    notes: [80, 90, 70]
  },
  {
    name: "Fatih",
    surName: "Demir",
    school: "I.O.O",
    class: "5/C",
    notes: [90, 70, 100]
  },
  {
    name: "Emre",
    surName: "Calıskan",
    school: "I.O.O",
    class: "5/C",
    notes: [70, 80, 90]
  },
];

// 1.yol 

function deleteArray() {
  return students.splice(2, 1);
}

deleteArray();

console.log(deleteArray());

console.log(students);

// 2.yol

function deleteStudent(indis){
  if(indis >=0 && indis < students.length){
    let tempStudent=[]

    for(let i=0; i < students.length; i++){
      if(i !== indis){
        tempStudent.push(students[i])
      }
    }

    students = tempStudent

    console.log(students);
    
  }else{
    console.log('Girilen ogrenci indis numarası gecersizdir');
    
  }
}

deleteStudent(2)




// ODEV-2 AVERAGE FONKSIYONU


let studentIndis = 1
function calculateStudentNote(notes){

  let sum = 0

  for(let i=0; i< notes.length; i++){
    sum += notes[i]
  }
  console.log(sum);
  let avg = sum / notes.length

 if (avg >= 60) {
    console.log(students[studentIndis].name, "Geçti, Tebrikler");
 }else{
     console.log(students[studentIndis].name, "Kaldı, Üzgünüz");
}
  

}
calculateStudentNote(students[studentIndis].notes)


// ODEV-3 CHANGE FONKSIYONU

// 1.yol basit

function changeName(){
   students[1].name = "Hasan"
}
changeName()
console.log(students);

// 2.yol

function changeStudentName(studentIndis, studentName){
  if(studentIndis >=0 && studentIndis < students.length){
    students[studentIndis].name = studentName

    console.log(`Ogrencinin adı ${studentName} olarak güncellenmistir.`);
    console.log(students);
    
    
  }else{
    console.log('yanlıs indis numarası girdiniz');
    
  }
}

changeStudentName(0, "Kerim")



