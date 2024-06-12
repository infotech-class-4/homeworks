import GetPriceAPI from "./getPriceAPI.js";
import { temporaryProductList } from "./getPriceAPI.js";

export default class Proxy {
  constructor() {
    this.getValue = function (item) {
      let myproduct = temporaryProductList.find(
        (product) => product.name === item
      );
      //tempProduct de ara
      if (myproduct) {
        return myproduct.price;
        //getPriceAPI da ara
      } else {
        let price = new GetPriceAPI().getValue(item);
        return price;
      }
    };
  }
}
