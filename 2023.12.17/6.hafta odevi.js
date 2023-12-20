//ODEV 1

function calculateSum(number1, number2){
    return number1+number2
}

var resultSum=calculateSum(1973, 2003)
console.log(resultSum);

function calculateSub(number1, number2){
    return number1-number2
}

var resultSub = calculateSub(1973, 2003)
console.log(resultSub);

function calculateMul(number1, number2){
    return number1*number2
}

var resultMul = calculateMul(1973, 2003)
console.log(resultMul);

function calculateDiv(number1, number2){
    return number1/number2
}

var resultDiv = calculateDiv(1973, 2003)
console.log(resultDiv);

//ODEV 2

var MyColors = ["Beyaz", "Siyah", "Turuncu"]
MyColors[1]="Yesil"
console.log(MyColors);

//ODEV 3

var student={
    firstname:"Gulbahar",
    surname: "Guler",
    school:"SIO",
    Class:"9-G",
    notes:[30, 95]
}

function avg(){
   return (student.notes[0]+student.notes[1])/2
}

var ResultAvg= avg()
console.log(ResultAvg);

function isPass(noteAvg){
    console.log(noteAvg>=60);
}
isPass(ResultAvg)


