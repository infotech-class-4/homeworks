import GetPriceApi from "./getPrice.js";
import { tempProduct } from "./getPrice.js";



export default class Proxy{
    constructor(){
        this.getValue =(item)=>{
            const findeProduct =tempProduct.find(
            (product)=> product.name===item);

            if(findeProduct){
                console.log(findeProduct);
                return findeProduct;
            }else{
                const result =new GetPriceApi().getValue(item);
                console.log(result);
                return result;
            }
        }
    }
}

