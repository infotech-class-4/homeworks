    // Uc fonksiyon istiyoruz

// 2. Ogrencilerin notlarinin ortalamasini bulan ve 60 esit ve ustu ogrenciler gecti, digerleri kaldi olarak yazdiran fonsiyon olusturunuz. (if-else condition)
    

var students = [
{ name: "Ali", surname: "Demir", school: "I.O.O", class: "5/C", notes: [50,60,50] }, 
{ name: "Mehmet", surname: "Sahin", school: "I.O.O", class: "5/A", notes: [70,90,80] }, 
{ name: "Beyza", surname: "Er", school: "I.O.O", class: "5/D", notes: [100,60,80] }, 
{ name: "Fatma", surname: "Kaya", school: "I.O.O", class: "6/A", notes: [90,60,90] }, 
{ name: "Zoe", surname: "Muller", school: "I.O.O", class: "6/C", notes: [60,40,50] }, 
]; 

console.log(students);
// console.clear();

function notOrtalamasi(studentArray) {

  for (var i = 0; i < studentArray.length; i++) {

    // Notların ortalamasını hesapla
    var ortalama =
      (studentArray[i].notes[0] + studentArray[i].notes[1] + studentArray[i].notes[2]) / 3;

    // Ortalama 60 ve üzeri ise "tebrikler gectiniz", değilse "üzgünüz kaldınız" yazdır
    if (ortalama >= 60) {
      console.log(studentArray[i].name + ": Tebrikler gectiniz");
    } else {
      console.log(studentArray[i].name + ": Üzgünüz kaldiniz");
    }
  }
}

notOrtalamasi(students);