// Senkron Asenkron Ödevi
// Gercek Hayat Uygulamalarinin Siraya Sokulmasi
// Istediginiz bir gercek hayat uygulamasini siraya sokun.
// callback
// Promise
// Async-Await
// --
// Default Senaryo
// Hastaneye kayit yaptir
// kayit basarili
// saglik sigortaniz yok
// Kan ver
// pozitif
// negatif
// Kan sonuclarini doktora göster
// iyisin dedi
// rapor yazdi

let kayitStatus = true;
let kanStatus = true;
let muayeneStatus = true;
let eczaneStatus = true;

const hastaneSekreterineKayitOl = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!kayitStatus) {
        reject(" Barkod makinasi bozuk. Kayit gerceklestirilemiyor!!");
      }
      resolve("Kayit islemi basarili!!");
    }, 1000);
  });
};

const kanVer = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!kanStatus) {
        reject("Laboratuvar kapali !! Baska zaman gel!!");
      }
      resolve("Kan verildi!!");
    }, 2000);
  });
};

const muayeneOl = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!muayeneStatus) {
        reject("Doktor yerinde degil sonuclari gösteremedin");
      }
      resolve("Ilac yaziliyor..");
    }, 2000);
  });
};

const eczaneyeGit = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!eczaneStatus) {
        reject("Eczanede ilac kalmamis");
      }
      resolve("Ilac alindi");
    }, 2000);
  });
};

hastaneSekreterineKayitOl()
  .then((kayitsonucu) => {
    console.log(kayitsonucu);
    kanVer()
      .then((kanSonucu) => {
        console.log(kanSonucu);
        muayeneOl()
          .then((muayeneSonucu) => {
            console.log(muayeneSonucu);
            eczaneyeGit()
              .then((eczaneSonucu) => {
                console.log(eczaneSonucu);
              })
              .catch((eczaneHata) => {
                console.log(eczaneHata);
              });
          })
          .catch((muayeneHata) => {
            console.log(muayeneHata);
          });
      })
      .catch((kanHata) => {
        console.log(kanHata);
      });
  })
  .catch((kayitHata) => {
    console.log(hataSonucu);
  });
