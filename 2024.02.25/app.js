
class GetPriceAPI {
  constructor() {
    this.getValue = function (item) {
        console.log("Veritabanindan veriler cekiliyor...");
      switch (item) {
        case "ekmek":
          return "0.50$";
        case "su":
          return "0.50$";
        case "patates":
          return "1.50$";
        case "domates":
          return "2.50$";
        case "sut":
          return "sut fiyat = 1.00$";
      }
    };
  }
}


//proxy

const proxy = new Proxy()
console.log(proxy.getValue("sut"))

// const getPrice = new GetPriceAPI()

// console.log(getPrice.getValue("sut"))
