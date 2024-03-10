import productList from "./productList.js  ";

export let tempProducts = [];


export default class GetPriceAPI {
  constructor() {
    this.getValue = (item) => {
      

      const findedProduct = productList.find(
        (product) => product.name === item
      );

      if (findedProduct) {
        
        tempProducts.push(findedProduct)
        return findedProduct;
      }

      const notFindProduct = "İstediğiniz ürün bizde yoktur"
      return notFindProduct
    };
  }
}


