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
  
  export default Ucgen;