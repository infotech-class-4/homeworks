const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

// MAP
// 1. Tüm isimlerin dizisini al
// 2. Tüm kisilerin boylarinin dizisini al
// 3. Tüm kisilerin agirliklarinin dizisini al
// 4. Yalnizca adi ve göz reklerini iceren dizi olustur

// REDUCE
// 1. Tüm kisilerin toplam agirliklari
// 2. Tüm kisilerin toplam boy uzunluklari
// 1. Tüm kisilerin ortalama agirliklari
// 2. Tüm kisilerin ortalama boy uzunluklari

// FILTER
// 1. Agirligi 100 den kücük olan kisiler
// 2. Tüm erkek karakterler

// SORT
// 1. Uzunluga göre sirala A-Z
// 2. Kiloya göre sirala Z-A

// EVERY
// 1. Hepsinin gözü mavi mi?

// SOME
// 1. En ay bir kisinin gözü mavi mi?

//---------------------------------------//
// MAP
// 1. Tüm isimlerin dizisini al
// 2. Tüm kisilerin boylarinin dizisini al
// 3. Tüm kisilerin agirliklarinin dizisini al
// 4. Yalnizca adi ve göz reklerini iceren dizi olustur

console.log("-----------1.soru------------");

const yeniArray1 = characters.map((item) => {
  return {
    isim: item.name,
  };
});
console.log(yeniArray1);

console.log("-----------------------------");

const yeniArray2 = characters.map((item) => {
  return {
    boyy: item.height,
  };
});
console.log(yeniArray2);

console.log("-----------------------------");

const yeniArray3 = characters.map((item) => {
  return {
    kilo: item.mass,
  };
});
console.log(yeniArray3);

console.log("-----------------------------");

const yeniArray4 = characters.map((item) => {
  return {
    isim: item.name,
    gözRengi: item.eye_color,
  };
});
console.log(yeniArray4);

console.log("-----------2.soru------------");

//---------------------------------------//
// REDUCE
// 1. Tüm kisilerin toplam agirliklari
// 2. Tüm kisilerin toplam boy uzunluklari
// 1. Tüm kisilerin ortalama agirliklari
// 2. Tüm kisilerin ortalama boy uzunluklari

const totalWeight = characters.reduce((acc, i) => {
  return (acc = acc + i.mass);
}, 0);
console.log(totalWeight + " kg");

console.log("-----------------------------");

const totalHeight = characters.reduce((acc, i) => {
  return (acc = acc + i.height);
}, 0);
console.log(totalHeight + " cm");

console.log("-----------------------------");

const avgWeight =
  characters.reduce((avg, i) => {
    return (avg = avg + i.mass);
  }, 0) / characters.length;

console.log(avgWeight + " kg");

console.log("-----------------------------");

const avgHeight =
  characters.reduce((avg, i) => {
    return (avg = avg + i.height);
  }, 0) / characters.length;
console.log(avgHeight + " cm");

console.log("-----------3.soru------------");

//---------------------------------------//
// FILTER
// 1. Agirligi 100 den kücük olan kisiler
// 2. Tüm erkek karakterler

const kilo = characters.filter((item) => {
  return item.mass <= 100;
});

console.log(kilo);

console.log("-----------------------------");

const cinsiyet = characters.filter((item) => {
  return item.gender == "male";
});
console.log(cinsiyet);

console.log("-----------4.soru------------");

//---------------------------------------//
// SORT
// 1. Uzunluga göre sirala A-Z
// 2. Kiloya göre sirala Z-A

const uzunluk = characters.sort((a, b) => {
  return b.height - a.height;
});
console.log(uzunluk);

console.log("-----------------------------");

const agırlık = characters.sort((a, b) => {
  return b.mass - a.mass;
});
console.log(agırlık);

console.log("-----------5.soru------------");

//---------------------------------------//
// EVERY
// 1. Hepsinin gözü mavi mi?

const blue = characters.every((item) => {
  return item.eye_color == "blue";
});
console.log(blue);

console.log("-----------6.soru------------");

//---------------------------------------//
// SOME
// 1. En ay bir kisinin gözü mavi mi?

const eye = characters.some((item) => {
  return (item.eye_color = "blue");
});
console.log(eye);
