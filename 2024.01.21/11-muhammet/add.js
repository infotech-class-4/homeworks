// Üçgen sınıfını tanımla
class Ucgen {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  hesaplaCevre() {
    return this.a + this.b + this.c;
  }

  hesaplaAlan() {
    const i = this.hesaplaCevre() / 2;
    return Math.sqrt(i * (i - this.a) * (i - this.b) * (i - this.c));
  }
}

const ornekUcgen = new Ucgen(3, 4, 5);

// Çevre ve alanı hesapla
const cevre = ornekUcgen.hesaplaCevre();
const alan = ornekUcgen.hesaplaAlan();

// Sonuçları yazdır
console.log("Üçgenin Çevresi:", cevre);
console.log("Üçgenin Alanı:", alan);
