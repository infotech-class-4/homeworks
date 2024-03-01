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
    }, 5000);
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
    }, 1000);
  });
};

const eczaneyeGit = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!eczaneStatus) {
        reject("Eczanede ilac kalmamis");
      }
      resolve("Ilac alindi");
    }, 3000);
  });
};

const akis = async () => {
  try {
    const kayitSonucu = await hastaneSekreterineKayitOl();
    console.log(kayitSonucu);

    const kanSonucu = await kanVer();
    console.log(kanSonucu);

    const muayeneSonucu = await muayeneOl();
    console.log(muayeneSonucu);

    const eczaneSonucu = await eczaneyeGit();
    console.log(eczaneSonucu);
  } catch (hata) {
    console.log(hata);
  }
};

akis();
