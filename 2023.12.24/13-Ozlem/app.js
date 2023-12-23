
var students = [
  { name: "Ali",surname:"Demir", school:"I.O.O", class:"5/C" , notes: [50,60,50] },
  { name: "Ayse",surname:"Yildiz", school:"I.O.O", class:"5/C" , notes: [60,65,70] },
  { name: "Veli",surname:"Budak", school:"I.O.O", class:"5/C" , notes: [40,60,50] },
  { name: "Serap",surname:"Demir", school:"I.O.O", class:"5/C" , notes: [50,50,50] },
  { name: "Meltem",surname:"Emir", school:"I.O.O", class:"5/C" , notes: [70,80,90] },
];


//?1. Fonksiyon
//parametre olarak gelen indis numarasina gore ilgili ogrenciyi silen bir fonksiyon olusturunuz.

//? 1. yol

// function delStudentFunc(index){

//   for(var i=0; i< students.length; i++){
//     if(i ===index){
//       students.splice(i,1);  // i. indisdeki 1 tane elemani sil
//       console.log("Ögrenci silindi");
      
//     }
    
//   }
//   console.log("Gecersiz indis numarasi.Lutfen dogru numara giriniz");
// }


//? 2.yol

function delStudentFunc(delStudentNum){
  var tempStudent=[] // bos bir array acip, asagidaki if blogunda eger argument olarak gelen indis numarasi asil arrayimizde dolasilan indis numarasina esit degilse onu bu bos arraye push la demek icin yazioyruz

  for(var i=0; i< students.length; i++){
    if(i !== delStudentNum){
      tempStudent.push(students[i])  
    }
    
  }
  students = []  // ve tekrar gecici array i asil array e gondermek icin once asil arrayi bosaltmamiz lazim.
  students.push(tempStudent)
  console.log("Gecersiz indis numarasi.Lutfen dogru numara giriniz");
}

delStudentFunc(2) // veli silindi
console.log(students);


// 2.Fonksiyon
//Ogrencilerin notlarinin ortalamasini bulan ve 60  ve ustu ogrenciler gecti digerleri kaldi olarak yazdiran fonsiyon olusturunuz.

var x=1; // manuel olarak ogrenci indisi vermek icin yaziyoruz
function ogrNotlari(studentsNots){
  console.log(studentsNots);

  var note=0; // not lari toplamak icin olusturuyoruz

// en asagida argument olarak ogrencilerin notlarini vermistik parametreye.burda da dolastigimiz ogrencinin notlarinin uzunlugundan kucuk olana kadar sarti koyduk
for(var i=0; i<studentsNots.length; i++){
  note+=studentsNots[i] // dolastigimiz ogrencinin notunu baslangictaki note degiskenine ekle deyip toplama yapiyoruz
}
var avarage=note/studentsNots.length  // ortalamayi bulmak icin dolastigimiz ogrencinin notlarinin uzunluguna boluyoruz note toplamini
if(avarage>=60){
  console.log(students[x].name, "gectiniz");
}else{
  console.log(students[x].name, "kaldiniz");
}
console.log(note);
}


ogrNotlari(students[x].notes)






// 3. Fonksiyon
// Fonksiyona parametre olarak gelen indis numarasina gore ilgili ogrencini adina ulasip degistiren bir foksiyon olusturunuz.

function adDegistir(isimNo, newName){

  for(var i=0; i< students.length; i++){
    if(i===isimNo){
      students[i].name=newName;
      console.log("Ögrenci adi degistirildi");
      return; // return den sonra islem biter ve kod devam etmez
      
    }
    
  }

  console.log("Gecersiz indis numarasi girdiniz.Lutfen gecerli bir numara giriniz");
}

adDegistir(0,"Ozlem")  // kacinci indisi ne olarak degistirmek istiyorsan onu argument olarak parametreye gonder
console.log(students);