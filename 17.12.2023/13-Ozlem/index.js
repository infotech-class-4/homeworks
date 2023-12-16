// 1- Primitive turleri kullanarak islemler;
// a-Herbir islem icin farkli fonksiyon oluşturun: calculateSum, bu fonksiyon iki sayı almalı ve bunların topla,cikarma, carpma ve bolme sonuclarini dönmelidir. Ancak, bu fonksiyon sadece primitive türleri kullanmalıdır.







// b. İki sayıyı toplamak,cikarmak, carpmak ve bolmek için calculateSum fonksiyonunu kullanın ve sonucu console'da yazdırın.

// TOPLAMA
// function calculateSum(x,y){

//     return x+y
// }

// console.log(calculateSum(10,12)); 


// CIKARTMA

// function calculateSum(x,y){

//     return y-x
// }

// console.log(calculateSum(15,6)); 



// CARPMA

// function calculateSum(x,y){

//     return x*y
// }

// console.log(calculateSum(10,12)); 


// BÖLME

function calculateSum(x,y){

    return x/y
}

console.log(calculateSum(10,2)); 


//  2. Reference Türleri ve Objeler:
//a. Bir dizi oluşturun ve bu dizide en sevdiğiniz renkleri temsil eden string değerler bulunsun.

var array=["white", "black", "blue", "red"]

array[2]="green"
console.log(array);  //  ['white', 'black', 'green', 'red']


//  3. Reference Türleri ve Objeler:

var object={
    isim:"esad",
    sinif:"6d",
    okul:"Dalton Gymnasium",
    notlar:[50,80,60]
}

function notOrtalama(notlar){
    //dizi bossa veya uzunlugu 0 ise 0 dondurur.
   if(notlar.length===0){
    return 0;
   }

   // notlari topla. 
   var toplam= notlar.reduce((acc, not)=>acc+not, 0)

// reduce fonksiyonu bir dizi elemanini tek bir degere indirgeme(reduce) islemi icin kullanilr. acc ve not ise reduce fonksiyonu icinde kullanilan parametre isimleridir. Bu fonksiyonun birincil amaci, bir dizi uzerinde dolasmak, her eleman uzerinde belirli bir islemi gerceklestirmek ve sonucta tek bir deger elde etmektir.

// acc parametresi(accumulator yani biriken) her bir iterasyonda biriken toplam degeri temsil eder. Ilk iterasyonda bu deger genellikle baslangic degeri olarak belirlenir(mesela burda 0 olarak belirlendi) ve her iterasyonda guncellenir

// not parametresi her itersyonda dizi icindeki o anki elemani temsil eder.reduce fonks. dizi uzerinde her donuste bu elemain alir ve belirtilen islemi gerceklestirir.


   //ortalamayi hesapla
   var ortalama= toplam/notlar.length;
   return ortalama
}
var ogrenciOrtalama= notOrtalama(object.notlar)


console.log(`Not Ortalamasi: ${ogrenciOrtalama}`); 