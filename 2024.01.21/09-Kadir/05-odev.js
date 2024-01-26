// Koordinat sisteminde olusturulan bir ucgenin cevresinin ve alaninin hesaplanmasi

// * class Nokta()
// * class Ucgen(nokta1, nokta2, nokta3)

// output

// * const ucgen_1 = new Ucgen(nokta1, nokta2, nokta3)
// * ucgen_1.cevreHesapla() // 24
// * ucgen_1.alanHesapla()  // 36

// kullanacak formuller

// 1) iki nokta arasi uzaklik
// https://www.wikihow.com.tr/%C4%B0ki-Nokta-Aras%C4%B1ndaki-Mesafe-Nas%C4%B1l-Bulunur

// 2) ucgenin alaninin hesaplanmasi formulu
// https://www.britannica.com/science/Herons-formula

// Js Karekök alma => Math.sqrt(9)     // 3
// Js Üs alma => Math.pow(4)           // 16

class Nokta {
  constructor(pX = 0, pY = 0) {
    this.x = pX;
    this.y = pY;
  }
}

const nokta1 = new Nokta(1, 1);
const nokta2 = new Nokta(5, 1);
const nokta3 = new Nokta(1, 4);




class Ucgen {
  constructor(pNokta1, pNokta2, pNokta3) {
    this.nokta1 = pNokta1;
    this.nokta2 = pNokta2;
    this.nokta3 = pNokta3;
  }

  kenarlarHesapla = () => {
    const kenar1 = Math.sqrt(
      Math.pow(this.nokta1.x - this.nokta2.x, 2) +
        Math.pow(this.nokta1.y - this.nokta2.y, 2)
    );
    const kenar2 = Math.sqrt(
      Math.pow(this.nokta1.x - this.nokta3.x, 2) +
        Math.pow(this.nokta1.y - this.nokta3.y, 2)
    );
    const kenar3 = Math.sqrt(
      Math.pow(this.nokta2.x - this.nokta3.x, 2) +
        Math.pow(this.nokta2.y - this.nokta3.y, 2)
    );

    return [kenar1, kenar2, kenar3];
  };

  cevreHesapla = () => {
    const kenarlar = this.kenarlarHesapla();
    return kenarlar.reduce((acc, kenar) => acc + kenar, 0);
  };

  //Area = Square root of√s(s - a)(s - b)(s - c) where s is half the perimeter, or (a + b + c)/2.
  alanHesapla = () => {
    const kenarlar = this.kenarlarHesapla();
    const s = this.cevreHesapla() / 2;

    const alan = Math.sqrt(
      s * (s - kenarlar[0]) * (s - kenarlar[1]) * (s - kenarlar[2])
    );

    return alan;
  };
}

const ucgen_1 = new Ucgen(nokta1, nokta2, nokta3);

ucgen_1.cevreHesapla();
ucgen_1.alanHesapla();

console.log("Ücgenin Cevresi:", ucgen_1.cevreHesapla());
console.log("Ücgenin Alani:", ucgen_1.alanHesapla());