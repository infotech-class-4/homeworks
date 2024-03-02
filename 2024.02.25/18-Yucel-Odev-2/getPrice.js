import productList from "./data.js";

export let tempProduct =[]

export default class GetPriceApi {
    constructor() {
        this.getValue = (item) => {
            console.log("Veri tabanı aranıyor...");
           
              const findedProduct = productList.find((product)=>product.name===item);
              if (findedProduct) {
                console.log(findedProduct);
                tempProduct.push(findedProduct)
                return findedProduct
                }

                return console.log("Ürün Bulunamadi");
            
            }
        };
    }


