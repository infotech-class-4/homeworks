// 1. Primitive Türleri Kullanarak İşlemler

//Toplama
function calculateAdd(x, y) {
  var result = x + y;
  return result;
}
var sum = calculateAdd(4, 7);
console.log("Toplam: " + sum);



//Cikarma
function calculateSub(a, b) {
    var result = a - b;
    return result;
}
var sum =calculateSub(9, 3)
console.log("Cikan sonuc: " + sum);



//Carpma
function calculateMultip(c, d) {
  var result = c * d;
  return result;
}
var sum = calculateMultip(7, 8);
console.log("Carpim sonucu: " + sum);



//Bölme
function calculateDiv(e, f) {
    var result = e / f;
    return result;
}
var sum = calculateDiv(111, 3)
console.log("Bolme sonucu: " + sum);





//1-b) 
function calculateSum(z, t) {
    
  // iki sayiyi toplama
  var toplam = z + t;
  console.log(z + " + " + t + " = " + toplam);

  // iki sayiyi cikarma
  var fark = z - t;
  console.log(z + " - " + t + " = " + fark);

  // iki sayiyi carpma
  var carpim = z * t;
  console.log(z + " * " + t + " = " + carpim);

  // iki sayiyi bolme
  var bolum = z / t;
  console.log(z + " / " + t + " = " + bolum);
}
calculateSum(12, 3);
