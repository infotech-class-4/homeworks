class Kronometre {
  constructor() {
    this.startTime = 0; // baslangic ve bitis degerleri bir sayi olacak ve birbirinden cikartinca da kronometreyi vermis olacak
    this.endTime = 0;
    this.duration = 0;
    this.isRunning = false;
  }

  basla() {

    if(this.isRunning){
        console.error("zaten calisiyor")
        return
    }
    this.startTime = new Date();
    this.isRunning = true;
  }

  dur() {
    if(!this.isRunning){
        console.error("calismiyorki dursun :)");
        return
        
    }

    this.endTime=new Date()
    this.isRunning=false
    this.duration=(this.endTime.getTime() - this.startTime.getTime())/1000
  }

  sonuc() {
    return this.duration + "sn"
  }
}


const kron = new Kronometre();
this.basla()
this.basla()







//! ikinci yontem
// class Kronometre{

//     hasStart=false
//     hasStop=false

//     started=null
//     stoped=null

// start(){
//     if(!this.hasStart){
//         this.started=new Date().getTime()
//         console.log( "start:" + this.started);
//         this.hasStart=true

//     }else{
//         console.log("zaten calisiyor...");
//     }

// }

// stop(){
//     if(this.hasStart==true && this.hasStop==false){
//          this.stoped = new Date().getTime();
//          console.log("stop:" + this.stoped);
//          this.hasStop=true

//     }else{
//         console.log("calismiyorki dursun");
//     }

// }

// result(){
//     if(this.hasStart && this.hasStop){
//       const result = (this.stoped - this.started) / 1000;
//       // console.log(result);
//       this.hasStart = false;
//       this.hasStop = false;
//        console.log(result);
//     }else{
//         console.log("start ve stop functionlarini calsitimalisiniz");
//     }

// }

// }

// const timer=new Kronometre()

// timer.start()
// timer.stop()
// timer.result()
