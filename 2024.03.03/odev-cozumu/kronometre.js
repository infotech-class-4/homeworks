class Kronometre {
  constructor() {
    this.startTime = 0;
    this.endTime = 0;
    this.duration = 0;
    this.isRunning = false;
  }

  basla() {
    if (this.isRunning) {
      console.error("Zaten calisiyor...");
      return;
    }

    this.startTime = new Date();
    this.isRunning = true;
  }

  dur() {
    if (!this.isRunning) {
      console.error("calismiyorki dursun :)");
      return;
    }

    this.isRunning = false;
    this.endTime = new Date();
    this.duration = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  }

  sonuc() {
    return this.duration + " sn";
  }
}

const kron = new Kronometre();

this.basla();
this.basla();
