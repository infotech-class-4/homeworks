
function calculateSum(number1,number2)
{
    return   number1 + number2
}

var resultSum = calculateSum(1453,2023)
  console.log(resultSum);

  
  
  function calculateSub(number1,number2)
{
    return   number1 - number2
}

var resultSub = calculateSub(1453,2023)
  console.log(resultSub);


  
  
  function calculateMul(number1,number2)
  {
      return   number1 * number2
  }
  
  var resultMul = calculateMul(1453,2023)
    console.log(resultMul);




    function calculateDiv(number1,number2)
  {
      return   number1 / number2
  }
  
  var resultDiv = calculateDiv(1453,2023)
    console.log(resultDiv);


    
    
    // -------------




 var myColor =["red","black","purple"]

 myColor[0]="mor"
 console.log(myColor);


//  -------


var student ={
    firstname:"ufuk",
    surname:"ata",
    school:"lise",
    class:"12",
    note:[80,45]
}


function avg() {
    return (student.note[0] + student.note[1])  /  2
}
var resulAvg = avg()
console.log(resulAvg);

function isPass(noteAvg){
    console.log(noteAvg >=60);
}

isPass(resulAvg)