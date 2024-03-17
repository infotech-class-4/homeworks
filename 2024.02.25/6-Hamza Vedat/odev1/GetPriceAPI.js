import productlist from "./productlist.js"

export let tempProducts = []


export default class GetPriceAPI{
    constructor(){
        this.getValue =(item)=>{
            console.log("veri tabanindan istek atiliyor.")
            
          const findedProduct=  productlist.find(
          (product)=>product.name === item);
          

          if (findedProduct) {
            tempProducts.push(findedProduct)
            return findedProduct;
          }

          const notFindProduct = "Aradiginiz ürün bitmiştir."
          return notFindProduct
          };
    }
}
