const students = [
    {
      name: "Kayra Sari",
      length: 1.68,
      weight: 70,
      eye_color: "blue",
      gender: "female",
    },
    {
      name: "Ahmet Kaya",
      length: 1.90,
      weight: 98,
      eye_color: "brown",
      gender: "male",
    },
    {
      name: "Sadi Mutlu",
      length: 1.70,
      weight: 120,
      eye_color: "brown",
      gender: "male",
    },
    {
      name: "Halil Mavi",
      length: 1.88,
      weight: 103,
      eye_color: "blue",
      gender: "male",
    },
  ];
  

  // MAP
// 1. Tüm isimlerin dizisini al

const isimdizisi = students.map((item) => { 
    return { 
        isimdizisi: item.name

}})
console.log(isimdizisi);

// 2. Tüm kisilerin boylarinin dizisini al
const boydisizisi = students.map((item) => { 
  return { 
      boydisizisi: item.length

}})
console.log(boydisizisi);
// 3. Tüm kisilerin agirliklarinin dizisini al

const agirlikdizisi = students.map((item) => { 
  return { 
      agirlikdizisi: item.weight

}})
console.log(agirlikdizisi);

// 4. Yalnizca adi ve göz reklerini iceren dizi olustur

const isimgöz = students.map((item) => { 
  return { 
      isim: item.name,
      göz: item.eye_color

}})
console.log(isimgöz);



// REDUCE
// 1. Tüm kisilerin toplam agirliklari

const toplamagirlik  = students.reduce((acc,item) => {
return acc = acc+item.weight;
}, 0);

console.log(toplamagirlik);


// 2. Tüm kisilerin toplam boy uzunluklari
const toplamboy = students.reduce((acc,item) => {
  return acc = acc+item.length;
  }, 0);
  
  console.log(toplamboy);

// 1. Tüm kisilerin ortalama agirliklari
const ortalamaagirlik  = students.reduce((acc,item) => {
  return acc = acc+item.weight;
  }, 0) / students.length ;
  
  console.log(ortalamaagirlik);

// 2. Tüm kisilerin ortalama boy uzunluklari

const ortalamaboy  = students.reduce((acc,item) => {
  return acc = acc+item.length;
  }, 0) / students.length ;
  
  console.log(ortalamaboy);



// FILTER
// 1. Agirligi 100 den kücük olan kisiler

 const yüzdenkücük = students.filter((item)=>{
  return item.weight<100
 })

 console.log(yüzdenkücük);

// 2. Tüm erkek karakterler

const erkek = students.filter((item)=>{
  return item.gender == "male"
 })

 console.log(erkek);

// SORT      
// 1. Uzunluga göre sirala A-Z

const uzunluga = students.sort((a,b)=>{
  return a.length - b.length;
});

console.log(uzunluga);

// 2. Kiloya göre sirala Z-A

const kiloya = students.sort((c,d)=>{
  return c.weight - d.weight;
});

console.log(kiloya);




// EVERY
// 1. Hepsinin gözü mavi mi?

const gözrengi = students.every((a)=>{
  return a.eye_color == "blue"
 });
 
 console.log(gözrengi);
 
// SOME
// 1. En az bir kisinin gözü mavi mi?


const enaz = students.some((a)=>{
  return a.eye_color == "blue"
 });
 
 console.log(enaz);
 
