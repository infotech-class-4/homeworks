export default class Ucgen {
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
