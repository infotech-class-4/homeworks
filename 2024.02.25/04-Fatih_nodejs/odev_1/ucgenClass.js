export default class Ucgen {
    constructor(aNoktası, bNoktası, cNoktası) {
      this.a = aNoktası;
      this.b = bNoktası;
      this.c = cNoktası;
  
      this.kenarlar = [];
  
      this.kenarlar.push(
        Math.sqrt(
          Math.pow(this.b.x - this.a.x, 2) + Math.pow(this.b.y - this.a.y, 2)
        )
      );
  
      this.kenarlar.push(
        Math.sqrt(
          Math.pow(this.b.x - this.c.x, 2) + Math.pow(this.b.y - this.c.y, 2)
        )
      );
  
      this.kenarlar.push(
        Math.sqrt(
          Math.pow(this.a.x - this.c.x, 2) + Math.pow(this.a.y - this.c.y, 2)
        )
      );
    }
  
    cevreHesapla = () => {
      return this.kenarlar.reduce((acc, item) => (acc += item), 0);
    };
  
    alanHesapla = () => {
      const s = this.cevreHesapla() / 2;
      const sonuc = Math.sqrt(
        s *
          (s - this.kenarlar[0]) *
          (s - this.kenarlar[1]) *
          (s - this.kenarlar[2])
      );
      return sonuc;
    };
  }