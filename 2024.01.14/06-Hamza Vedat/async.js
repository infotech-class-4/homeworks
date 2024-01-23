const durumlar = {
  kayıt: {
    durum: true,
  },
  RandevuSonucu: "sisteme kaydınız yapıldı",
  memur: {
    Kagıt: true,
    gise: {
      sıra: 7,
    },
  },
};

const RandevuAl = () => {
  return new Promise((resolve, reject) => {
    console.log("Randevu Alıyorum.");

    setTimeout(() => {
      if (!durumlar.kayıt.durum) {
        reject("Sistemde hata var.Randevu alamıyorum.");
      }

      resolve(true);
    }, 2000);
  });
};

const kayıtYap = () => {
  console.log("Randevu alındı");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 5000);
  });
};

const randevusırası = () => {
  console.log("Benim sıram");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!durumlar.memur.kagıt) {
        reject("sıramı kaçırdım");
      }

      resolve(`${durumlar.memur.Kagıt} işleminiz gerçekleştirildi.`);
    }, 3000);
  });
};

const islem = async () => {
  const kayitDurumu = await RandevuAl().catch((sonuc) => console.log(sonuc));

  if (!kayitDurumu) return;

  await kayıtYap();

  randevusırası()
    .then((sonuc) => console.log(sonuc))
    .catch((sonuc) => console.log(sonuc));
};

islem();