const ikiTipKanAlinidi = [
    { id: 1, post: "birinci kan ornegi" },
    { id: 2, post: "ikinci kan ornegi" },
  ];

const kanVerildiMi = true;
const sonucIyiMi = true;

const kanVerme = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (kanVerildiMi === true) {
            resolve("Kan verilme basarili");
        }else{
            reject("Kan verilemedi");
        }
    }, 3000);
    });
};
const kanSonucPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (sonucIyiMi === true){
                console.log("iyisin dedi");
                resolve(ikiTipKanAlinidi);
            }else{
                reject("Rapor yazdi");
            }
            },1000);
        });
    };

const  islem = async () => {
     await kanVerme().then((sonuc) => { 
        console.log(sonuc);

    });
    kanSonucPromise().then((sonuc) => { 
        console.log(sonuc);
    });
};
islem();