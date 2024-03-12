import GetPriceAPI from "./GetPriceAPI.js"
import { tempProducts } from "./GetPriceAPI.js"




export default class Proxy {
    constructor(){
        this.getValue =(item)=>{

           const findedProduct=tempProducts.find(
            (product)=>product.name === item
            )

           if (findedProduct){
            console.log("proxy den veri çekildi.")
            console.log(findedProduct)
            return findedProduct

           }else{
            const result= new GetPriceAPI().getValue(item)
            console.log(result)
            return result;
           }


        }
    }
}

const deneme = new Proxy()

deneme.getValue("ekmek")
deneme.getValue("su")
deneme.getValue("sut")

deneme.getValue("su")
deneme.getValue("balık")