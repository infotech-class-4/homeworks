import GetPriceAPI from "./GetPriceApi.js";
import { tempProducts } from "./GetPriceApi.js";

export default class Proxy {
  constructor() {
    this.getValue = (item) => {
      console.log("artık proxy sayfasındayız");

      const findedProduct = tempProducts.find(
        (product) => product.name === item
      );

      if (findedProduct) {
        console.log("Proxy'den veri çekildi...");
        console.log(findedProduct);
        return findedProduct;
      } else {
        const result = new GetPriceAPI().getValue(item);
        console.log(result);
        return result; 
      }
    };
  }
}


