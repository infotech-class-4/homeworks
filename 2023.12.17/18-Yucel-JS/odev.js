//odev-dört-islem

function calculateSum(x,y)
    {return x+y}

    var resultSum = calculateSum(44,23)

    console.log(resultSum);



    function calculateSub(x,y)
    {return x-y}

    var resultSub = calculateSub(44,23)

    console.log(resultSub);



    function calculateMul(x,y)
    {return x*y}

    var resultMul = calculateMul(44,23)

    console.log(resultMul);



    function calculateDiv(x,y)
    {return x/y}

    var resultDiv = calculateDiv(44,23)

    console.log(resultDiv);



//odev-dizi

    var myColor = ["Green","Orange","Black"]

    myColor[1]="Portakal"  
    console.log(myColor);


//ödev-obje

    var student = {

        Ad:"yucel",
        Soyad:"ozen",
        Memeleket:"Adana",
        Okul:"VHS",
        Dil:"Almanca",
        Not:[88,88,55,46]

    }

    function Avg(){

        return(student.Not[0]+student.Not[1]+student.Not[2]+student.Not[3]) /
4
    }

    var resultAvg = Avg()
    console.log(resultAvg);

    function isPass(notAvg){
        console.log(notAvg >=60);
        }
        isPass(resultAvg)
    
