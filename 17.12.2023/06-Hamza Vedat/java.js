console.log('Hello World')

 //ödev-2
 var myFavColor = ['green', 'purple', 'black']
 console.log(myFavColor)

 myFavColor[0] = 'white'
 console.log(myFavColor)



 //ödev-3
 var student = {
    firstName:'Melek',
    lastName:'Yildiz',
    school:'Betül Can Anadolu Lisesi',
    class:'10/C',
    notes:[80,75,90]
 }

 function ort(){
    return (student.notes[0] + student.notes[1]) / 2
 }

var resultOrt = ort()
console.log(resultOrt)

function pass(noteOrt){
    console.log(noteOrt >=85)
}

pass(resultOrt)

console.log('Hello Teacher')

//SORU-1

// toplama

function calculateSum(number1,number2){

    return number1 + number2
}

var resultSum = calculateSum(17,8)
console.log(resultSum);

//çıkartma

function calculateSub(number1,number2){

    return number1 - number2
}

var resultSub = calculateSub(2001,17)
console.log(resultSub);

//çarpma

function calculateMul (number1,number2){
    return number1 * number2
}
 var resultMul = calculateMul(10,5)

 console.log(resultMul);

//bölme

function calculateDiv (number1,number2){
    return number1 / number2
}
 var resultDiv = calculateDiv(15,3)

 console.log(resultDiv);

// SORU-2

var myColor = ["Black","Navy blue","Yellow"]
myColor[1]="Lacivert"
console.log(myColor);

//SORU-3

var student = {
    firstName:'Hamza',
    lastName:'Vedat',
    school:'SRHAL Anadolu Liesi',
    class:'11/C',
    notes:[80,85,90]
 }

 function ort(){
    return (student.notes[0] + student.notes[1]) / 2
 }

var resultOrt = ort()
console.log(resultOrt)

function pass(noteOrt){
    console.log(noteOrt >=75)
}

pass(resultOrt)