class Kronometre{
    constructor(){
        this.startTime = 0;
        this.stopTime = 0;
        this.duration = 0;
        this.isRunning = false;
    }
    start (){
        if(this.isRunning){
            console.error("Zaten calisiyor..");
            return;
        }
        this.startTime = new Date();
        this.isRunning = true;
    }
    dur (){
        if(!this.isRunning){
            console.error("Zaten durdu..");
            return;
        }
        this.stopTime = new Date();
        this.duration += this.stopTime.getTime() - this.startTime.getTime()/1000;
        this.isRunning = false;
    }
    sonuc (){
        return this.duration + "saniye";
    }
}
const kron = new Kronometre();

this.start();
this.start();
