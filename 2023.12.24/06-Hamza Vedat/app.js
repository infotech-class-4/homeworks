var students = [
    { name: "Ali",surname:"Yılmaz", school:"SRHAL", class:"11/E" , notes: [50,60,70] },
    { name: "Mehmet",surname:"Aslan", school:"SRHAL", class:"11/E" , notes: [60,65,70] },
    { name: "Ahmet",surname:"Kaya", school:"SRHAL", class:"11/E" , notes: [65,70,55] },
    { name: "Hamza",surname:"Vedat", school:"SRHAL", class:"11/E" , notes: [85,75,95] },
    { name: "Alperen",surname:"Sarı", school:"SRHAL", class:"11/E" , notes: [70,85,90] },
  ];

  //1.SORU

  function deleteStudent(studentIndis){
    if(studentIndis >=0 && studentIndis< students.length){
        students.splice(studentIndis, 1)
        console.log(students[studentIndis].name, "adli öğrenci silinmiştir.");

    }else{
        console.log("girilen öğrenci numarası yanlıştır.");
  }
}
deleteStudent(-2)

//2.SORU

var StudentIndis = 0
function calculateStudentNote(notes){

    var sum=0

    for(var i=0;i<students.length;i++){
        sum +=notes[i]
    }

    console.log(sum);
    var avg= sum /notes.length
    
    if(avg >=70){
        console.log(students[StudentIndis].name, "TEBRİKLER SINAVI GEÇTİNİZ");
    }else{
        console.log(students[StudentIndis].name, "SINAVI GEÇEMEDİNİZ");  
    }
}
calculateStudentNote(students[StudentIndis].notes)


//3.SORU

function changeStudentName(studentIndis, studentName){
    if(studentIndis >=0 && studentIndis < students.length){
      students[studentIndis].name = studentName
  
      console.log(" Ogrencinin adı " + students[studentIndis].name  + " olarak güncellenmistir." );
      console.log(students);
      
      
    }else{
      console.log("yanlıs indis numarası girdiniz");
      
    }
  }
  
  changeStudentName(0, "Murat")