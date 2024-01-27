
//! inheritance kullanacagiz.

// ilk class imizi; koordinat duzleminde uc nokta belirleyip, bunlarin x ve y duzlemini yazip, aralarindaki uzakligi bulmak icinolusturuyoruz.
class Nokta {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const nokta_1 = new Nokta(1, 1);

const nokta_2 = new Nokta(5, 1);

const nokta_3 = new Nokta(5, 4);


// const noktaHesapla=Math.sqrt(nokta_2.x-nokta_1.x) + (nokta_2.y - nokta_1.y)




// ikinci classimiz ise ucgen olusturmak icin lazim olan class.

class Ucgen {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  


  // once kenarlari bulalim.iki noktanin koordinat duzlemindeki x ve y duzlemlerinin kendi aralarindaki farki bulup, x ve y yi toplarsak iki nokta arasindaki uzakligi yani ucgenin  de bir kenarini bulmus oluruz. matematiksel formulu su adresten bulunabilir, bunu koda dokecegiz. Once bos bir array olusturalim ve bunun icine kenarlari atalim sonra ucgen icin alip burdan kullanalim.her bir kenar icin ayri ayri yapmaliyiz
  //iki nokta arasi uzaklik formulu
  // https://www.wikihow.com.tr/%C4%B0ki-Nokta-Aras%C4%B1ndaki-Mesafe-Nas%C4%B1l-Bulunur


  this.kenarlar=[];

  this.kenarlar.push(
    Math.sqrt(
      Math.pow(this.b.x-this.a.x ,2) + Math.pow(this.b.y - this.a.y ,2)
    )  // bu matematiksel formulunun kod hali.
  )


  this.kenarlar.push(
    Math.sqrt(
      Math.pow(this.b.x - this.c.x ,2) + Math.pow(this.b.y - this.c.y ,2)
    )
  )


  this.kenarlar.push(
    Math.sqrt(
      Math.pow(this.a.x - this.c.x ,2) + Math.pow(this.a.y - this.c.y ,2)
    )
  )
 }

// matematikteki ucgenin cevresi formulu kenarlarin toplamidir. Bu matematiksel islemi arraylerde reduce ile yapiyorduk.bir fonksiyon icinde yapalim bunu.

cevreHesapla=()=>{
    return  this.kenarlar.reduce((acc,item)=>(acc +=item),0)
  }


  // ve alan hesaplama formulu icin bu siteyi kullanabilirz.
  //https://www.britannica.com/science/Herons-formula
  // bu formule gore cevrenin yarisini alip, sonra formule gore cevrenin yarisindan  birinci, ikinci ve ucuncu kenarlari cikarip, birbiri ile carpiyoruz ve sonrada cevrenin yarisi ile de carpip karesini aliyoruz.once cevrenin yarisini bulalim. ve bu kenarlarimiz arrayin icinde o.i. indis numarasi ile ulasiriz herbir kenara.

  alanHesapla=()=>{
    const s=this.cevreHesapla()/2;

    const sonuc = Math.sqrt(
      s*
      (s-this.kenarlar[0]) * (s-this.kenarlar[1]) * (s-this.kenarlar[2])
      
      )
    return sonuc;
  }



}

//ucgen olusturalim simdi. 3 tane nokta lazim bize
const ucgen=new Ucgen(nokta_1, nokta_2, nokta_3);

