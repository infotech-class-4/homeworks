// 1-callback

const kayıtTamam = true;

const kayıtYaptır = (callback1, callback2) => {
  setTimeout(() => {
    if (kayıtTamam) {
      callback1();
      callback2();
    } else {
      console.log("saglık sigortanız yok");
    }
  }, 1000);
};

const kanVer = () => {
  setTimeout(() => {
    if (false) {
      console.log("kan sonucu pozitif");
    } else {
      console.log("kan sonucu negatif");
    }
  }, 2000);
};

const kanSonucları = () => {
  setTimeout(() => {
    if (false) {
      console.log("iyisin eve dönebilirsin");
    } else {
      console.log("Kan'da problem var heyete gireceksin ");
    }
  }, 3000);
};

kayıtYaptır(kanVer, kanSonucları);

// 2-Promise

//promise yazımı

const kanVerdiMi = true;

const kanSonuclarıOlumluMu = true;

const kanPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (kanVerdiMi) {
        resolve("kan sonucu pozitif");
      } else {
        reject("kan sonucu negatif");
      }
    }, 1000);
  });
};

const kanSonucPromise = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (kanSonuclarıOlumluMu) {
        res("iyisin eve dönebilirsin");
      } else {
        rej("Kan'da problem var heyete gireceksin");
      }
    }, 2000);
  });
};

// promise kullanımı

kanPromise()
  .then((kanSonucu) => {
    console.log(kanSonucu);

    kanSonucPromise()
      .then((sonuc) => {
        // console.log('kan sonucu geldi')
        console.log(sonuc);
      })
      .catch((hata) => {
        console.log(hata);
      });
  })
  .catch((hataMesajı) => {
    console.log(hataMesajı);
  })
  .finally(() => {
    console.log("tüm islemler tamamlandı");
  });

// 3- ASYNC_AWAIT

const surec = async () => {
  await kanPromise()
    .then((islem) => console.log(islem))
    .catch((hata) => console.log(hata));

  kanSonucPromise().then((islem) => {
    console.log(islem);
  });
};

surec();
