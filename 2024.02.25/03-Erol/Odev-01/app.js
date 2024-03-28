import Nokta from "./nokta.js";
import Ucgen from "./ucgen.js";

const nokta1 = new Nokta(1, 1);
const nokta2 = new Nokta(3, 1);
const nokta3 = new Nokta(3, 4);

const ucgen = new Ucgen(nokta1, nokta2, nokta3);

console.log("Çevre Hesapla:", ucgen.cevreHesapla());
console.log("Alan Hesapla:", ucgen.alanHesapla());
