//! -------------------------Backend tarafi -------------------

// Promise lari yazalim;

const anmeldung2= true;
let blut2=true;

const krankenhausAnmeldungPromise=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(anmeldung2){
                resolve("Anmeldung ist okay")
            }else{
                reject("leider")
            }

        },1000)
    })
}

const blutTestPromise=()=>{

    return new Promise((res,rej)=>{
         setTimeout(()=>{
        if(blut2){
            res("Bluttestergebnis ist pozitif");
   
        }else{
            rej("Bluttestergebnis ist negatif");
        
            
        }

    },2000)

    })
   
}




const diagnosePromise=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            if(blut2){
        resolve("Ruhebericht");
    }else{
        reject("du bist gesund");
    }

        

    },3000);
    

})
}

//! ---------------Frontend Tarafi --------------------
//async-await kullanimi

const ergebnis=async()=>{

try {

const sonuc=await krankenhausAnmeldungPromise();
console.log(sonuc);

const sonuc2= await blutTestPromise();
console.log(sonuc2);

try {
    const sonuc3=await diagnosePromise();
console.log(sonuc3);
} catch (hata) {
    console.log(hata);
    
}

    
} catch (hata) {
    console.log(hata);
    
}

}
ergebnis();