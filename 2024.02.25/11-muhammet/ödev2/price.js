import data from "./liste.js";

export function GetPrice() {
  this.getValue = function (item) {
    console.log("veritabanından bilgiler çekiliyor...");

    const bulunanUrun = data.find((urun) => urun.type === item);

    return bulunanUrun.price;
  };
}
