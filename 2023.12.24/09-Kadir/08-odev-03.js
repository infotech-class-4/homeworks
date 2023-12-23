    // Uc fonksiyon istiyoruz

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

function ogrenciIsmiDegistir(studentArray, index, yeniName) {

  // Verilen indeks numarasına sahip ögrencinin ismini degistirme

  if (index >= 0 && index < studentArray.length) {
    studentArray[index].name = yeniName;
    console.log("Ögrenci ismi basariyla degistirildi.");
  } else {
    console.log("Gecersiz index numarasi. Lütfen gecerli bir index belirtin.");
  }
}

// Ögrenci ismini degistirme fonksiyonunu kullanarak ismi degistirme
ogrenciIsmiDegistir(students, 4, "Kemal");
console.log(students);
