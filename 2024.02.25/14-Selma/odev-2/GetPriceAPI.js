import urunler from "./urunler.js";

export let tempUrun = [];


export default class GetPriceAPI {
    constructor() {
      this.getValue = function (item) {
        
        const findItem = urunler.find((urun) => urun.adi === item);


        if (findItem) {
          tempUrun.push(findItem);
          return findItem;
        }
        return { adi: "bulunamadi", fiyat: 0 };
    }
  
}
}
