// Nokta icin
import Nokta from "./noktaClass.js";

const nokta1 = new Nokta(1, 1);
const nokta2 = new Nokta(5, 1);
const nokta3 = new Nokta(5, 4);

console.log(nokta1);
console.log(nokta2);
console.log(nokta3);

// console.log(cevreHesapla);

// console.log(alanHesapla);





// Ucgen icin
import Ucgen from "./ucgenClass.js";

const ucgen = new Ucgen(nokta1, nokta2, nokta3);

console.log(ucgen);

console.log("Alan:", ucgen.alanHesapla());


console.log("Cevre:", ucgen.cevreHesapla());



