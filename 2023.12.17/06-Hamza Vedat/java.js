console.log('Hello Teacher')

//SORU-1

//toplama

  function calculateSum (number1,number2){
    return number1 + number2
}
 var resultSum = calculateSum(17,8)

 console.log(resultSum)

 //çıkarma

   function calculateSub (number1,number2){
       return number1 - number2
   }
    var resultSub = calculateSub(2001,17)

    console.log(resultSub)

//çarpma

function calculateMul (number1,number2){
    return number1 * number2
}
 var resultMul = calculateMul(10,5)

 console.log(resultMul)

 //bölme

 function calculateDiv (number1,number2){
    return number1 / number2
}
 var resultDiv = calculateDiv(50,10)

 console.log(resultDiv)

 //SORU-2

 var myColor = ['Black', 'Navy Blue', 'Yellow']
 console.log(myColor)

 myColor[1] = 'Lacivert'
 console.log(myColor)

 //SORU-3

 var student = {
    firstName:'Hamza',
    lastName:'Vedat',
    school:'SRHAL Anadolu Lisesi',
    class:'11/C',
    notes:[80,85,90]
 }

 function ort(){
    return (student.notes[0] + student.notes[1] + student.notes[2]) / 3
 }

var resultOrt = ort()
console.log(resultOrt)

function pass(noteOrt){
    console.log(noteOrt >=75)
}

pass(resultOrt)