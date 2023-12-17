// soru 1
function calculateSum(x, y) {
  console.log(x + y);
}
calculateSum(5, 4);

function calculateSum1(x, y) {
  console.log(x - y);
}
calculateSum1(10, 6);

function calculateSum2(x, y) {
  console.log(x * y);
}
calculateSum2(7, 9);

function calculateSum3(x, y) {
  console.log(x / y);
}
calculateSum3(8, 3);

console.clear();

// soru 2

var myArray = ["mavi", "kırmızı", "yeşil", "turuncu"];
console.log(myArray);
myArray[1] = "pembe";
console.log(myArray);

console.clear();

// soru 3

var myStudent = {
  name: "Ali",
  class: "6/B",
  school: "Anadolu ilkokulu",
  notlar: [40, 60, 80, 85],
};

console.log(myStudent);

function ort() {
  return (
    (myStudent.notlar[0] +
      myStudent.notlar[1] +
      myStudent.notlar[2] +
      myStudent.notlar[3]) /
    4
  );
}
var islem = ort();
console.log(islem);

console.clear();

function sonuc() {
  console.log(myStudent.notlar[0] >= 60);
  console.log(myStudent.notlar[1] >= 60);
  console.log(myStudent.notlar[2] >= 60);
  console.log(myStudent.notlar[3] >= 60);
}
sonuc(islem);
