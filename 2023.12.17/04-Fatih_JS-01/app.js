// ODEV-1
function calculateSumT(x, y) {
  const topla = x + y;

  return topla;
}

console.log(calculateSumT(5, 6));

function calculateSumC(x, y) {
  const cıkar = x - y;

  return cıkar;
}

console.log(calculateSumC(6, 5));

function calculateSumX(x, y) {
  const carp = x * y;

  return carp;
}

console.log(calculateSumX(6, 5));

function calculateSumB(x, y) {
  const bol = x / y;
  return bol;
}

console.log(calculateSumB(6, 2));

console.clear();

// ODEV-1 SWITCH-CASE

const add = function (n1, n2) {
  return n1 + n2;
};
const sub = function (n1, n2) {
  return n1 - n2;
};
const div = function (n1, n2) {
  return n1 / n2;
};
const mul = function (n1, n2) {
  return n1 * n2;
};

const colculateSumKısa = function (n1, n2, op) {
  let result = 0;
  switch (op) {
    case "+":
      result = add(n1, n2);
      break;
    case "-":
      result = sub(n1, n2);
      break;
    case "/":
      result = div(n1, n2);
      break;
    case "*":
      result = mul(n1, n2);
      break;
    default:
      break;
  }
  return result;
};

console.log(colculateSumKısa(4, 2, "/"));
console.log(colculateSumKısa(2, 4, "*"));
console.log(colculateSumKısa(3, 1, "+"));
console.log(colculateSumKısa(5, 2, "-"));

//   ODEV-2

const myColor = ["sarı", "yesil", "mavi", "kırmızı", "gri"];

myColor[3] = "turuncu";
myColor[0] = "kahverengi";
myColor[4] = "siyah";

console.log(myColor);

// (5) ['kahverengi', 'yesil', 'mavi', 'turuncu', 'siyah']

//   ODEV-3

const student = {
  name: "Ali",
  class: "5/A",
  school: "I.O.O",
  notes: [50, 70],
};

function average() {
  return student.notes[0] + student.notes[1] / 2;
}

const sum = average();
console.log(sum >= 60);
