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
let eczaneStatus = false;

const hastaneSekreterineKayitOl = (ikinciIslem) => {
  setTimeout(() => {
    if (!kayitStatus) {
      console.log(" Barkod makinasi bozuk. Kayit gerceklestirilemiyor!!");
      return;
    }
    console.log("Kayit islemi basarili!!");
    ikinciIslem(muayeneOl);
  }, 3000);
};

const kanVer = (ucuncuIslem) => {
  setTimeout(() => {
    if (!kanStatus) {
      console.log(" Laboratuvar kapali !! Baska zaman gel!!");
      return;
    }
    console.log("Kan verildi!!");
    ucuncuIslem(eczaneyeGit);
  }, 2000);
};

const muayeneOl = (dorduncuIslem) => {
  setTimeout(() => {
    if (!muayeneOl) {
      console.log("Doktor yerinde degil sonuclari gösteremedin");
      return;
    }
    console.log("Ilac yaziliyor..");
    eczaneyeGit();
  }, 1000);
};

const eczaneyeGit = () => {
  setTimeout(() => {
    if (!eczaneStatus) {
      console.log("Eczanede ilac kalmamis");
      return;
    }
    console.log("Ilac alindi");
  }, 2000);
};

hastaneSekreterineKayitOl(kanVer);
