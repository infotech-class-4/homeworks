
const kanVerildi = true;
const sonucIyi = true;

const kanVer = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (kanVerildi === true) {
            resolve("Kan verilme basarili");
        } else {
            reject("Kan verilemedi");
        }
    },3000);
    });
}
const sonucPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (sonucIyi === true){
                resolve("iyisin dedi");
            }else{
                reject("Rapor yazdi");
            }
            },1000);
        });
    };

kanVer()
    .then((kanSonucu) => {
        console.log(kanSonucu);

sonucPromise()
.then((sonuc) => {
    console.log(sonuc);
})
.catch((hata) => {
    console.log(hata);    });

    })
    .catch((hatali) => {
        console.log(hatali);    });

