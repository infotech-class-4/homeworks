export function calc(sayi_1, sayi_2, islem) {
    var result = {
      sonuc: 0,
      hata: "",
    };

    if ( islem === "topla"){
      islem ="+"

    }else if (islem ==="cikar"){
      islem ="-"
    }else if (islem === "carp"){
      islem ="*"
    }else if (islem === "böl"){
      islem ="/"
    }else{
      result.hata = "gecersiz bir islem girdiniz";
      return result;
    }
  
    if (typeof sayi_1 !== "number" || typeof sayi_2 !== "number") {
      result.hata = "Lütfen sayi giriniz.";
      return result;
    }
  
    if (islem == "/" && sayi_2 == 0) {
      result.hata = "Bölme isleminde ikinci sayi sifir olamaz.";
      return result;
    }
  
    if (["+", "-", "/", "*"].indexOf(islem) == -1) {
      result.hata = "Hatali islem operatörü.";
      return result;
    }
  
    switch (islem) {
      case "+":
        result.sonuc = sayi_1 + sayi_2;
        break;
      case "-":
        result.sonuc = sayi_1 - sayi_2;
        break;
      case "/":
        result.sonuc = sayi_1 / sayi_2;
        break;
      case "*":
        result.sonuc = sayi_1 * sayi_2;
        break;
  
      default:
        result.sonuc = 0;
        break;
    }
  
    return result;
  }