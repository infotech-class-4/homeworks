// 1- Primitive turleri kullanarak islemler;
// a-Herbir islem icin farkli fonksiyon oluşturun: calculateSum, bu fonksiyon iki sayı almalı ve bunların topla,cikarma, carpma ve bolme sonuclarini dönmelidir. Ancak, bu fonksiyon sadece primitive türleri kullanmalıdır.
// b. İki sayıyı toplamak,cikarmak, carpmak ve bolmek için calculateSum fonksiyonunu kullanın ve sonucu console'da yazdırın.

// TOPLAMA
 function calculateSum(x,y){

    return x+y
 }


 console.log(calculateSum(10,12)); 


// CIKARTMA

function calculateSub(x,y){

    return y-x
}


console.log(calculateSub(15,6)); 



// CARPMA

function calculateMul(x,y){

    return x*y
}

console.log(calculateMul(10,12)); 


// BÖLME

function calculateDiv(x,y){

    return x/y
}

console.log(calculateDiv(10,2)); 


//  2. Reference Türleri ve Objeler:
//a. Bir dizi oluşturun ve bu dizide en sevdiğiniz renkleri temsil eden string değerler bulunsun.

var array=["white", "black", "blue", "red"]

array[2]="green"
console.log(array);  //  ['white', 'black', 'green', 'red']


//  3. Reference Türleri ve Objeler:

//a-

var object={
    isim:"esad",
    sinif:"6d",
    okul:"Dalton Gymnasium",
    notlar:[50,80]
}


// b-
function notOrtalama(notlar){
    return (object.notlar[0] + object.notlar[1]) / 2
}

var resultAvg=notOrtalama()
 console.log(resultAvg); 


// c-
function isPass(notAvg){
console.log(notAvg >=60);
}
isPass(resultAvg)