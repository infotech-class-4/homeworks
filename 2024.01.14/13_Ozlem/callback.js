// ## Gercek Hayat Uygulamalarinin Siraya Sokulmasi

// - Istediginiz bir gercek hayat uygulamasini siraya sokun.
//   - callback
//   - Promise
//   - Async-Await

// ## --

// - Default Senaryo
//   - Hastaneye kayit yaptir
//     - kayit basarili
//     - saglik sigortaniz yok
//   - Kan ver
//     - pozitif
//     - negatif
//   - Kan sonuclarini doktora göster
//     - iyisin dedi
//     - rapor yazdi

//! callback() function;

const anmeldung= true;
const blut=false;

const krankenhausAnmeldung=(blutTest, diagnose)=>{
    setTimeout(()=>{
         if(anmeldung){
        console.log("Sie wurden angemeldet");
        blutTest();

    }else{
        console.log("Sie haben keine Krankenversicherung");
    }



},1000)
};


const blutTest=()=>{
    setTimeout(()=>{
        if(blut){
            console.log("Bluttestergebnis ist pozitif");
            diagnose();
        }else{
            console.log("Bluttestergebnis ist negatif");
            diagnose();
        }

    },2000)
}




const diagnose=()=>{
    if(blut){
        console.log("Ruhebericht");
    }else{
        console.log("du bist gesund");
    }

}



krankenhausAnmeldung(blutTest,diagnose);


