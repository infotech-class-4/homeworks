// Istediginiz bir gercek hayat uygulamasini siraya sokun
// CallbackFunction


const emptyparkinglot = (ornek2CallBackFunc) => {
    
    setTimeout(() => { 
        console. log("last 3 places");

        ornek2CallBackFunc(ornekCallBackFunc)

    },3000)


};

const ornek2CallBackFunc=(ornekCallBackFunc)=>{

    setTimeout(() => {
        console. log("last 2 places");
    
        ornekCallBackFunc()
      
    }, 2000);

}

const ornekCallBackFunc = ()=>{
    ///...
    setTimeout(() => {
        console. log("last 1 places");
        
    },1000)
}

emptyparkinglot(ornek2CallBackFunc);


// Promise

const Parkingarea = false;

const parkingplaces = () => {

    return new Promise((resolve, reject) => {
        if(Parkingarea) {
            resolve("there is parking area");

        }
        else{
            reject("there is no parking area ")
        }
    })
};

parkingplaces()
    .then((emptyplaces) =>{
        console.log(emptyplaces)
        
    }).catch((noemptyplaces) => {
        console.log(noemptyplaces)
    });


    // Async-Await




const biröncekiislembitti=true;
const bekleyenmüsteri = false;

const siraPromise = () => {

    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            if (biröncekiislembitti == true){
                resolve("Line Number xxx");
            }else{
                reject("No One Waiting In Line");
            }
        },2000);
    });
};

const bekleyenPromise =() => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (bekleyenmüsteri == true) {
                resolve("Being Processed"); 
            }else{
                reject("Please get the line number");
            }
            },3000);
        });
};


const islem =  async ()=>{
await siraPromise()
.then((sonuc) => 
console.log(sonuc));

bekleyenPromise()
.then((sonuc) =>{
 console.log(sonuc);
});
};

islem();