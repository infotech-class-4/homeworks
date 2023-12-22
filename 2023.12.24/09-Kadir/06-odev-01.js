    // Uc fonksiyon istiyoruz

// 1. Fonksiyon parametre olarak gelen indis numarasina gore ilgili ogrenciyi silen bir fonksiyon olusturunuz.  => splice()
// 2. Ogrencilerin notlarinin ortalamasini bulan ve 60 esit ve ustu ogrenciler gecti, digerleri kaldi olarak yazdiran fonsiyon olusturunuz. (if-else condition)
// 3. Fonksiyona parametre olarak gelen indis numarasina gore ilgili ogrencini adina ulasip degistiren bir foksiyon olusturunuz.
// 
// 
     

var students = [
{ name: "Ali", surname: "Demir", school: "I.O.O", class: "5/C", notes: [50,60,50] }, 
{ name: "Mehmet", surname: "Sahin", school: "I.O.O", class: "5/A", notes: [70,90,80] }, 
{ name: "Beyza", surname: "Er", school: "I.O.O", class: "5/D", notes: [100,60,80] }, 
{ name: "Fatma", surname: "Kaya", school: "I.O.O", class: "6/A", notes: [90,60,90] }, 
{ name: "Zoe", surname: "Muller", school: "I.O.O", class: "6/C", notes: [60,40,50] }, 
]; 

console.log(students);
// console.clear();

function ogrenciSil() {
  students.splice(4, 1);
}

ogrenciSil();
console.log(students);