//ödev-1  
//seçilen öğrenciyi çıkaran bir fonksiyon. Hatta geçersiz bir sayı yazılırsa uyarı versin
var students =[
    {name:'Melek', not:50},
    {name:'Ömer', not:60},
    {name:'Semra', not:90},
    {name:'Sevde', not:70},
]

function ogrenciSil(indis) {
    if (indis >= 0 && indis < students.length) {
        students.splice(indis, 1);
        console.log(`Öğrenci ${indis +1} başarıyla silindi.`);
    } else{
        console.log('Gecersiz indis numarasi');
    }
}

    ogrenciSil(1)
    console.log(students);


    
//ödev-2 
//öğrencilerin ortalamalarını hesaplayıp geçip geçmediklerini belirten bir fonksiyon
var students = [
    {name:'Melek', surname:'Yildiz', notes: [55,60]},
    {name:'Ömer', surname:'Yilmaz', notes: [90,80]},
    {name:'Ahmet', surname:'Akbas', notes: [100,90]},
    {name:'Mehmet', surname:'Karabas', notes: [65,70]},
 ]; 

  function ort(student) {
    return (student.notes[0] + student.notes[1]) / 2;
 }


 for (var i = 0; i < students.length; i++) {
    var resultOrt = ort(students[i]); 
    console.log(students[i].name + "'in ortalaması:", resultOrt);

    if (resultOrt >= 60) {
        console.log(students[i].name, 'gectiniz');
    } else {
        console.log(students[i].name, 'kaldınız');
    }
}

 console.log(students)

 

//ödev-3 
//fonksiyona parametre olarak gelen indis numarasına göre iligili öğrencinin adına ulaşıp değiştiren bir fonksiyon
 var students = [
    {name:'Ali', not: [50,60]},
    {name:'Veli', not: [90,80]},
    {name:'Ahmet', not: [100,70]},
    {name:'Mehmet', not: [40,70]},
 ];
 function studentNameUpdate(indis, newName) {
    if (indis >= 0 && indis < students.length) {
        students[indis].name = newName;
        console.log(`Öğrenci adı basariyla güncellendi.`);
    } else{
        console.log('Gecersiz indis numarasi');
    }
 }
studentNameUpdate(2, 'Melek')
console.log(students);

