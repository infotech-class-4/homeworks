class Kronometre {
  hasStart = false;
  hasStop = false;

  started = 0;
  stoped = null;

  start() {
    if (!this.hasStart) {
      this.started = new Date().getTime();
      console.log("start : " + this.started);
      this.hasStart = true;
    } else {
      console.log("Hata zaten calisiyor....");
    }
  }

  stop() {
    if (this.hasStart && !this.hasStop) {
      this.stoped = new Date().getTime();
      this.hasStop = true;
      console.log("stop : " + this.stoped);
    } else {
      console.log("Hata calismiyor ki durusun..");
    }
  }

  result() {
    if (this.hasStart && this.hasStop) {
      const result = (this.stoped - this.started) / 1000;
      this.hasStart = false;
      this.hasStop = false;
      console.log(result);
    } else {
      console.log(
        "once sirasiyla start ve stop funclarini calistirmalisiniz..."
      );
    }
  }
}

const timer = new Kronometre();
// timer.start();
// timer.stop();
// timer.result();
