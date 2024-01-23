const durumlar = {
  kayıt: {
    durum: true,
  },
  RandevuSonucu: "sisteme kaydınız yapıldı",
  memur: {
    gise : true,
    sıra: {
      sıram: 5,
    }

  }
};
  
  const kayitYap = (ikinciIslem) => {
    console.log("kayıt yapıyorum");
  
    setTimeout(() => {
      if (!durumlar.kayıt.durum) {
        console.log("Sistemde yogunluk var");
        return;
      }
  
      ikinciIslem(RandevuAl);
    }, 2000);
  };
  
  const Randevualımı = (sonrakiIslem) => {
    console.log("Randevu aldım.");
  
    setTimeout(() => {
      sonrakiIslem();
    }, 2000);
  };
  
  const RandevuAl = () => {
    console.log("belgeleri verdim");
  
    setTimeout(() => {
      if (!durumlar.memur.gise) {
        console.log("İşlem başarıyla gerçekleştirilemedi.");
        return;
      }
  
      console.log(`${durumlar.memur.sıra.sıram} kişi önümde bekliyorum.`);
    }, 2000);
  };
  
  kayitYap(Randevualımı);