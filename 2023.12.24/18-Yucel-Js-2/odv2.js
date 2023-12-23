//1.kisim

var students =[
     
     {  name: "Mehmet",surname:"Asa", school:"VHS", class:"2" , notes: [90,70,20] },
     {  name: "Ceyda",surname:"Tarim", school:"VHS", class:"2" , notes: [95,90,100] },
     {  name: "Latif",surname:"Suna", school:"VHS", class:"2" , notes: [80,75,35] },
     {  name: "Osman",surname:"Demir", school:"VHS", class:"2" , notes: [78,40,52] },
     {  name: "Yaren",surname:"Sadik", school:"VHS", class:"2" , notes: [20,90,20] },
     {  name: "Yasin",surname:"Ala", school:"VHS", class:"2" , notes: [80,91,55] },

]


function silme(indis) {
var i=0;
    if(indis >=i && indis <students.length) {
        students.splice(indis, 1);
        console.log("Öğrenciyi sildiniz.");
    }

    else
    {
        console.log("Gecersiz Ögrenci")
    }
}
silme(5)
console.log(students);




//2.kisim

  function avg(students) {
    return (students.notes[0] + students.notes[1]+students.notes[2]) / 3;
 }


 for 
   (var i = 0; i < students.length; i++) {
    var sonuc = avg(students[i]); 
    console.log(students[i].name, sonuc);

    if (sonuc >= 60) {
        console.log(students[i].name, "gecti");
    } else {
        console.log(students[i].name, "üzgünüz");
    }
}

 console.log(students)



//3.kisim


function namechange(students, indis, newname) {

    var x=0
  
    if (indis >= x && indis < students.length) {
      students[indis].name = newname;
      console.log("Isim degisti.");
    } else {
      console.log("Gecersiz Ögrenci");
    }
  }
  
  
  namechange(students, 2, "Canan");
  console.log(students);