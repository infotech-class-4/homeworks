const urunVar = true;
const odemeBasarili = true;

function urunSec(urunAdi) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (urunVar) {
        resolve(`${urunAdi} sepete eklendi.`);
      } else {
        reject(`${urunAdi} stoklarda yok.`);
      }
    }, 1000);
  });
}

function odemeYap(tutar) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (odemeBasarili) {
        resolve(`Ödeme tamamlandı. Toplam tutar: ${tutar} TL`);
      } else {
        reject("Ödeme sırasında bir hata oluştu.");
      }
    }, 1500);
  });
}

async function alisveris() {
  const urunSecDurumu = await urunSec("Kahve");
  console.log(urunSecDurumu);

  const odemeDurumu = await odemeYap(20);
  console.log(odemeDurumu);
}

alisveris();
