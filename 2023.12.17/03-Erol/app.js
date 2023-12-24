// Odev 1

function calculate(operation, num1, num2) {
  switch (operation) {
    case "sum":
      return num1 + num2;
    case "sub":
      return num1 - num2;
    case "mul":
      return num1 * num2;
    case "div":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Bir sayinin sifira bölümü Tanimsiz!!";
      }
    default:
      return "Gecersiz operasyon talebi!!";
  }
}

// Test Cases
let sumResult = calculate("sum", 5, 3);
console.log();
let subResult = calculate("sub", 8, 3);
console.log();
let mulResult = calculate("mul", 4, 2);
console.log();
let divResult = calculate("div", 10, 2);
console.log();
let div2Result = calculate("div", 10, 0);
console.log();
let xyzResult = calculate("xyz", 110, 10);
console.log();

// Odev 2
let myFavoriteColors = ["kirmizi", "mavi", "pembe", "turuncu", "siyah"];
let tempString = myFavoriteColors[0];
myFavoriteColors[0] = "kahverengi";
console.log("My Favourite Colors are:" + myFavoriteColors);

let myFavoriteColors2 = new Array(
  "kirmizi",
  "mavi",
  "pembe",
  "turuncu",
  "siyah"
);
let tempString2 = myFavoriteColors2[0];
myFavoriteColors2[0] = "yesil";
console.log("My Favourite Colors are:" + myFavoriteColors2);

// Odev 3
var students = {
  isim: "Erol",
  sinif: "3A",
  okul: "Tepebasi IOO",
  notlar: [85, 0],
};

console.log(students);
console.table(students);

function average(not1, not2) {
  return (not1 + not2) / 2;
}

var averageNotOfTheStudent = average(students.notlar[0], students.notlar[1]);
console.log("Average Note of the student: " + averageNotOfTheStudent);

function passFailChecker(avgNote) {
  if (avgNote >= 50) return " passed the exam!!";
  else return " failed in the exam!!";
}

console.log(students.isim + passFailChecker(averageNotOfTheStudent));
