import Nokta  from "./nokta.js";

const nokta_1 =new Nokta(1,4);
const nokta_2 =new Nokta(4,1);
const nokta_3 =new Nokta(4,8);

console.log(nokta_1);
console.log(nokta_2);
console.log(nokta_3);

import ucgen from "./ucgen.js";

const ucgen = new ucgen(nokta_1,nokta_2,nokta_3);