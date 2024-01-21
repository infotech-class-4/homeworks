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

// CallBack

const kayitYap = (ikinciIslem) => {
  console.log("Kayit yaptiriyorum");

  setTimeout(() => {
    if (!durumlar.kayit.durum) {
      console.log("Saglik sigortam yokmus, halbuki GSS primlerini ödemistim");
      return;
    }

    ikinciIslem(muayeneOl);
  }, 2000);
};

const kanVer = (sonrakiIslem) => {
  console.log("Kan veriyorum");

  setTimeout(() => {
    sonrakiIslem();
  }, 2000);
};

const muayeneOl = () => {
  console.log("Su anda muayene oluyorum, cok heyecanliyim");

  setTimeout(() => {
    if (!durumlar.doktor.hastalikVarMi) {
      console.log("Hasta degilmisim, aslinda rapor almak istiyordum");
      return;
    }

    console.log(`${durumlar.doktor.rapor.gun} gün raporu kaptim! :)))`);
  }, 2000);
};

kayitYap(kanVer);
