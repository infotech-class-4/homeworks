const durumlar = {
  kayit: {
    durum: true,
  },
  kanSonucu: "pozitif",
  doktor: {
    hastalikVarMi: true,
    rapor: {
      gun: 3,
    },
  },
};

const kayitYap = () => {
  return new Promise((resolve, reject) => {
    console.log("Kayit yaptiriyorum");

    setTimeout(() => {
      if (!durumlar.kayit.durum) {
        reject("Saglik sigortam yokmus, halbuki GSS primlerini ödemistim");
      }

      resolve(true);
    }, 2000);
  });
};

const kanVer = () => {
  console.log("Kan veriyorum");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 5000);
  });
};

const muayeneOl = () => {
  console.log("Su anda muayene oluyorum, cok heyecanliyim");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!durumlar.doktor.hastalikVarMi) {
        reject("Hasta degilmisim, aslinda rapor almak istiyordum");
      }

      resolve(`${durumlar.doktor.rapor.gun} gün raporu kaptim! :)))`);
    }, 2000);
  });
};

const islem = async () => {
  const kayitDurumu = await kayitYap().catch((sonuc) => console.log(sonuc));

  if (!kayitDurumu) return;

  await kanVer();

  muayeneOl()
    .then((sonuc) => console.log(sonuc))
    .catch((sonuc) => console.log(sonuc));
};

islem();
