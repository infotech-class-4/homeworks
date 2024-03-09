class Kronometre{
    hasStart = false
    hasStop = false

    started =  null
    stoped = null

        start() {
            if (!this.hasStart) {
                this.started = new Date().getTime();
                console.log("start :" + this.started);
                this.hasStart =true;

            }else{
                console.log("Zaten Calisiyor");
            }

        }
        stop() {
            if (this.hasStart && ! this.hasStop) {
                this.stoped = new Date().getTime();
                this.hasStop =true;
                console.log("stop :" +this.stoped);
                
            }else{
                console.log("Calismiyorki dursun");
            }
            
        }
        result() {
            if(this.started && this.stoped){
            const result = (this.started - this.stoped) / 1000;
            this.hasStart = false;
            this.hasStop = false;
            console.log(result);
            }else{
                console.log("önce start ve stop func. larini calsitirmalisiniz");
            }

            
        }



}

const timer =new Kronometre();

timer.start();
timer.stop();
timer.result();



