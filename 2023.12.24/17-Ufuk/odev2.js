var students= [
    ,
      {name:"Ufuk", surname:"Tas" , school:"6/A", notes:[50,60,50] },
      {name:"Aykut", surname:"Demir" , school:"6/C", notes:[80,35,70] },
      {name:"Deniz", surname:"Tunc" , school:"6/A", notes:[80,50,30] },
      {name:"Selim", surname:"Derya" , school:"6/D", notes:[70,60,75] },
      {name:"Derya", surname:"Ozturk" , school:"6/B", notes:[50,25,85] },
      {name:"Ayse", surname:"Yilmaz" , school:"6/C", notes:[45,90,20] }
    ];
    



var studentIndis = 4
function calculateStudentNote(notes){
 
    var sum=0

    for(var i=0;i<notes.length;i++){
        sum += notes[i]
    }


    console.log(sum);
    var avg= sum / notes.length

    if(avg >=60){
        console.log(students[studentIndis].name, "tebrikler kazandiniz.");

    }else{
        console.log(students[studentIndis].name, "uzgunuz kaldiniz.");   
    }

}

calculateStudentNote(students[studentIndis].notes)
