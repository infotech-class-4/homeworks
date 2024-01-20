const kayitIslemiBasarili =false;
const kayit = (kayitYaptir,saglikSigortasiYaptir) => {
    setTimeout
        (() => {
            if(kayitIslemiBasarili){
                console.log("Kayit basarili");
                kayitYaptir();
            }else{
                console.log("saglik sigortaniz yok");
                saglikSigortasiYaptir();
            }
            
        },1000);
    };

    const randevuAl= () => {
        setTimeout(() => {
            console.log("randevu alindi");
        },2000);
    }
    const sigortaYaptir= () => {
        setTimeout(() => {
            console.log("hasta saglik sigortasi icin yonlendirildi");
        },2000);
    }
  kayit(randevuAl,sigortaYaptir);  