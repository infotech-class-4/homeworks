var students= [
    ,
      {name:"Ufuk", surname:"Tas" , school:"6/A", notes:[50,60,50] },
      {name:"Aykut", surname:"Demir" , school:"6/C", notes:[80,35,70] },
      {name:"Deniz", surname:"Tunc" , school:"6/A", notes:[80,50,30] },
      {name:"Selim", surname:"Derya" , school:"6/D", notes:[70,60,75] },
      {name:"Derya", surname:"Ozturk" , school:"6/B", notes:[50,25,85] },
      {name:"Ayse", surname:"Yilmaz" , school:"6/C", notes:[45,90,20] }
    ];
    

function changeStudentname(studentIndis, studenName) {
    
    if(studentIndis >= 0 && studentIndis< students.length){
     students[studentIndis].name= studenName

     console.log("ogrencini adi" + students[studentIndis].name + "olarak guncellenmistir.");
    console.log(students);

    }else{
        console.log("yanlis indis numarasi girdiniz.");

    }

}

changeStudentname(1, "TARIK")