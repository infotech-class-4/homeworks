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
    var studentsindis = 0

  function avgStudents(notes) {
    
    	var sum=0
      for( var i=0; i<notes.length;i++){
        sum += notes[i]
      }
       console.log(sum);
      var avg= sum /notes.length

      if(avg >=60){
        console.log(students[studentsindis].name, "Gectiniz")

      }else{
        console.log(students[studentsindis].name, "Kaldiniz")

      }

 }


 avgStudents(students[studentsindis].notes)



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