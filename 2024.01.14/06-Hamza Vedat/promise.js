const durumlar = {
    kayit: {
      durum: true,
    },
    RandevuSonucu: "sisteme kaydınız yapıldı",
    memur: {
      gise: false,
      sıra: {
        sıram: 3,
      },
    },
  };
  
  const kayitYap = () => {
    return new Promise((resolve, reject) => {
      console.log("Kayit yaptiriyorum");
  
      setTimeout(() => {
        if (!durumlar.kayit.durum) {
          reject("sistemde yogunluk var.");
        }
  
        resolve(true);
      }, 2000);
    });
  };
  
  const Randevualımı = () => {
    console.log("Randevu alıyorum");
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  };
  
  const Randevuislemi = () => {
    console.log("belgeleri verdim.");
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!durumlar.memur.gise) {
          reject("sıramı kaçırdım");
        }
  
        resolve(`${durumlar.memur.sıra.sıram} kişi önüme geçti.`);
      }, 2000);
    });
  };
  
  kayitYap()
    .then(() =>
    Randevualımı().then(() =>
        Randevuislemi()
          .then((sonuc) => console.log(sonuc))
          .catch((sonuc) => console.log(sonuc))
      )
    )
    .catch((sonuc) => console.log(sonuc));