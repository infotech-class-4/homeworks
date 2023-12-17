console.log('Hello World')

//ödev-1

//toplama
  function calculateSum (number1,number2){
    return number1 + number2
}
 var resultSum = calculateSum(5,4)

 console.log(resultSum)

 //çıkarma
   function calculateSub (number1,number2){
       return number1 - number2
   }
    var resultSub = calculateSub(5,4)

    console.log(resultSub)

//çarpma
function calculateMul (number1,number2){
    return number1 * number2
}
 var resultMul = calculateMul(5,4)

 console.log(resultMul)

 //bölme
 function calculateDiv (number1,number2){
    return number1 / number2
}
 var resultDiv = calculateDiv(5,1)

 console.log(resultDiv)



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
