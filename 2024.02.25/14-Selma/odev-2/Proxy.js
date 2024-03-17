
 
 import GetPriceAPI from "GetPriceAPI.js";
 import { tempUrun } from "GetPriceAPI.js";

 
 
 
 
 export default class Proxy {
    constructor(){
        this.getValue =(item)=>{

          const findItem=  tempUrun.find((urun)=>urun.adi === item);
        
            if(findItem){
                return findedProduct;
            }else{  
                const result = new GetPriceAPI().getValue(item);
                return result
        }
    }
    };
    }
 
 const proxy = new Proxy();
    proxy.getValue(ekmek);
    proxy.getValue(su);
    proxy.getValue(patates);
    proxy.getValue(domates);
    proxy.getValue(sut);