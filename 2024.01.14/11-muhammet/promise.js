const bakiye = 1000;
const tutar = 200;

function paraCek(miktar) {
  return new Promise((resolve, reject) => {
    console.log(`bakiyeniz : ${bakiye} TL`);
    setTimeout(() => {
      if (miktar <= bakiye) {
        resolve(`${miktar} TL çekildi. Yeni bakiye: ${bakiye - miktar} TL`);
      } else {
        reject("Yetersiz bakiye. İşlem gerçekleştirilemedi.");
      }
    }, 2000);
  });
}

function bakiyeKontrolu() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Güncel bakiye: ${bakiye - tutar} TL`);
    }, 1000);
  });
}

paraCek(tutar)
  .then((cekmeDurumu) => {
    console.log(cekmeDurumu);

    return bakiyeKontrolu();
  })
  .then((bakiyeDurumu) => {
    console.log(bakiyeDurumu);
  })
  .catch((error) => {
    console.error("Hata:", error);
  });
