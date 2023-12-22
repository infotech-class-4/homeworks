// 3. Reference Türleri ve Objeler

var schueler = {
    vorNAme : "Max",
    nachName : "Müller",
    schule : "Gymnasium",
    klasse : "8-a",
    noten : [90, 96, 80]
}


//3-b
function durchSchnitt() {
    return (schueler.noten[0] + schueler.noten[1] + schueler.noten[2]) / 3;
}
var result = durchSchnitt()
console.log(result);



//3-c
function isPass(noteAvg) {
    console.log(noteAvg >= 60);
}
isPass(result);