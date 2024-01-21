const ilaçVar = false;

const loginOl = (pozitif, negatif) => {
  setTimeout(() => {
    if (ilaçVar) {
      console.log("ilaçınız hazırlanıyor");
      pozitif();
    } else {
      console.log("ilaç stokta yok");
      negatif();
    }
  }, 1000);
};

const teslim = () => {
  setTimeout(() => {
    console.log("ilaçlar teslim edildi");
  }, 2000);
};

const yeniden = () => {
  setTimeout(() => {
    console.log("tekrar bekleriz");
  }, 2000);
};

loginOl(teslim, yeniden);
