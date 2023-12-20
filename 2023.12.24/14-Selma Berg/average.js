
/* 2. Ogrencilerin notlarinin ortalamasini bulan ve 
60 esit ve ustu ogrenciler gecti digerleri kaldi olarak
yazdiran fonsiyon olusturunuz.*/



var myStudents = [ 
    { name: "Ahmet", surname: "Demir", school: "Noroff", class: "10/B", notes: [50,60,50] },
    { name: "Zeynep", surname: "Sari", school: "GET", class: "3/F", notes: [70,60,80] },
    { name: "Tarik", surname: "Kara", school: "Centric", class: "5/A", notes: [90,60,60] }, 
    { name: "Elif", surname: "Aker", school: "Oslo Met", class: "9/C", notes: [50,60,80] },
    { name: "Burhan", surname: "Keskin", school: "Kristiana", class: "7/E", notes: [50,90,70] }
];

function average(studentIndex) {
    var sum = 0;
    for (var i = 0; i < myStudents[studentIndex].notes.length; i++) {
        sum += myStudents[studentIndex].notes[i];
    }
    return sum / myStudents[studentIndex].notes.length;
}

for (var i = 0; i < myStudents.length; i++) {

if (average(i) >= 60) {
    console.log(myStudents[i].name +" "+"pass");
} else {
    console.log(myStudents[i].name +" "+"fail");
}
}

