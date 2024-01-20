//! promise;

// -------------------------Backend tarafi -------------------

// Promise lari yazalim;

const anmeldung2= true;
let blut2=true;  // daha sonra degistirebiliriz ki asagida degsitirdik

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

const blutTest2=()=>{

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




const diagnose2=()=>{
    return new Promise((basarili,hata)=>{
        setTimeout(()=>{

            if(blut2){
        basarili("Ruhebericht");
    }else{
        hata("du bist gesund");
    }

        

    },3000);
    

})
}

// ---------------Frontend Tarafi --------------------

krankenhausAnmeldungPromise()
    .then((krankheitergebnis)=>{
   
    console.log(krankheitergebnis);
    console.log("Bluttestergebnis ist schon bereit");
   
   blutTest2()
        .then((ergebnis)=>{
        
        console.log(ergebnis);

        // blut2=true durumunda diagnose2 nin calismasi
        diagnose2()
            .then((bericht)=>{
                console.log(bericht);
    })
    .catch((hata)=>{
        console.log(hata);
    })
    })
    .catch((fehler)=>{
        console.log(fehler);

        // blut2'yi false olarak ayarliyoruz.let ile tanimladigimiz icin degisiklik yapablrz.
                blut2 = false;

                
                diagnose2()
                    .then((bericht) => {
                        console.log(bericht);
                    })
                    .catch((hata) => {
                        console.log(hata);
                    });

    })
})
.catch((fehlerMessage)=>{
    console.log(fehlerMessage);
})

