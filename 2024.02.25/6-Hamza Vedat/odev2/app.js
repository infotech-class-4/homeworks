import Ucgen from "./ucgen.js";
import Nokta from "./nokta.js";

const nokta_1 = new Nokta(1, 1);

const nokta_2 = new Nokta(5, 1);

const nokta_3 = new Nokta(5, 4);

   let noktalar = [nokta_1,nokta_2,nokta_3]

   for (let i of noktalar) {
       console.log(i); 
  };
const ucgen=new Ucgen(nokta_1, nokta_2, nokta_3);

console.log("Alan:", ucgen.alanHesapla());

console.log("Çevre:", ucgen.cevreHesapla());



