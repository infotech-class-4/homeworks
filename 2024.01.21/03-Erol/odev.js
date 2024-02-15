// Koordinat sisteminde olusturulan bir ucgenin cevresinin ve alaninin hesaplanmasi
// class Nokta()
// class Ucgen(nokta1, nokta2, nokta3)
// output
// const ucgen_1 = new Ucgen(.......)
// ucgen_1.cevreHesapla() // 24
// ucgen_1.alanHesapla() // 36
// kullanacaginiz formuller
// iki nokta arasi uzaklik

// https://www.wikihow.com.tr/%C4%B0ki-Nokta-Aras%C4%B1ndaki-Mesafe-Nas%C4%B1l-Bulunur
// ucgenin alaninin hesaplanmasi formulu

// https://www.britannica.com/science/Herons-formula
// Js Karekök alma Math.sqrt(9) // 3

// Js Üs alma Math.pow(4) // 16

class Nokta {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Ucgen {
  constructor(aNokta1, bNokta2, cNokta3) {
    this.a = aNokta1;
    this.b = bNokta2;
    this.c = cNokta3;

    this.kenarUzunluklari = [
      this.mesafeHesapla(this.a, this.b),
      this.mesafeHesapla(this.b, this.c),
      this.mesafeHesapla(this.a, this.c),
    ];
  }

  mesafeHesapla = (nokta1, nokta2) =>
    Math.sqrt(
      Math.pow(nokta2.x - nokta1.x, 2) + Math.pow(nokta2.y - nokta1.y, 2)
    );

  cevreHesapla() {
    return this.kenarUzunluklari.reduce((toplam, eleman) => toplam + eleman, 0);
  }

  alanHesapla() {
    const s = this.cevreHesapla() / 2;
    return Math.sqrt(
      s *
        (s - this.kenarUzunluklari[0]) *
        (s - this.kenarUzunluklari[1]) *
        (s - this.kenarUzunluklari[2])
    );
  }
}

const nokta1 = new Nokta(1, 1);
const nokta2 = new Nokta(3, 1);
const nokta3 = new Nokta(3, 4);

const ucgen = new Ucgen(nokta1, nokta2, nokta3);

console.log("Çevre Hesapla:", ucgen.cevreHesapla());
console.log("Alan Hesapla:", ucgen.alanHesapla());
