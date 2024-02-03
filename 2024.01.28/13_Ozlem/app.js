//? input ve divi secelim




const inputDiv = document.querySelector(".form-control");
console.log(inputDiv);

//? input icin event ekleyelim
let inputValue="";

inputDiv.addEventListener("input", (event) => {
  console.log(event.target.value);

  inputValue= event.target.value // inputun degerini guncellemek icin
  myInp.placeholder = inputValue; // asagida olusturdugum inputun placeholderi girilen deger o.i.

});
//!________________________________________________________
//? input buton ve divi olusturalim, özelliklerini verelim

const divInpGroup = document.querySelector(".myInpGroup"); //sahiplendirme islemini de buraya yapacgz

// yeni buton ve imputu olusturalim
const myInp = document.createElement("input");

myInp.type = "text", 
myInp.style.borderColor = "blue";

const myBtn = document.createElement("button");
myBtn.type = "button";
myBtn.innerHTML = "ADD";
myBtn.className = "btn btn-outline-primary bg-white text-primary";


//!____________________________________________________________

//? buttona tiklaninca olusturdugumuz taglari eklesin.butonu sec, click eventi ekle, nereye ekleyeceksen onu sec,  ne sahiplendireceksen ekle


const btnB = document.querySelector(".btn");
console.log(btnB);


btnB.addEventListener("click", (e) => {
  //console.log(e);



  divInpGroup.appendChild(myInp.cloneNode());// birden fazla inputun olusmasi icin clonluyorz
  divInpGroup.appendChild(myBtn);

  inputDiv.value = ""; // input alanini bosaltmak icin


  //! table alani

const myTh= document.createElement("th")
myTh.scope="col"


const myThead=document.querySelector("thead")
const tr_1=myThead.children[0]// ustte sahiplendirdik
//console.log(tr_1);

tr_1.appendChild(myTh)
myTh.textContent=inputValue


});

let inputValue2=""




myBtn.addEventListener("click",(e)=>{

    inputValue2=myInp.value;
//myBtn ye tiklaninca; td leri olusturacgz


const bodyTd=document.createElement("td")
bodyTd.textContent=inputValue2


const myBody=document.querySelector("tbody")
const tr_2=myBody.children[0]
tr_2.appendChild(bodyTd)

myInp.value=""
})














