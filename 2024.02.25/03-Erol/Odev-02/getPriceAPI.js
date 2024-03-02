import { productList } from "./products.js";

export let temporaryProductList = [];
export default class GetPriceAPI {
  constructor() {
    this.getValue = function (item) {
      console.log("Veritabanindan veriler cekiliyor...");

      let product = productList.find((product) => product.name === item);
      if (product) {
        console.log("Hello");
        temporaryProductList.push(product);
        return product.price;
      }
    };
  }
}

const deneme = new GetPriceAPI();
console.log(deneme.getValue("sut"));
