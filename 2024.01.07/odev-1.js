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
// const names = characters.map((person) => {
//   return {
//     name: person.name,
//   };
// });

// console.log(names);
// 2. Tüm kisilerin boylarinin dizisini al
// const heights = characters.map((person) => {
//   return person.height;
// });

// console.log(heights);
// 3. Tüm kisilerin agirliklarinin dizisini al
// const masses = characters.map((person) => {
//   return {
//     agirlik: person.mass,
//   };
// });

// console.log(masses);
// 4. Yalnizca adi ve göz reklerini iceren dizi olustur
// const kisiler = characters.map((person) => {
//   return {
//     adi: person.name,
//     gozRengi: person.eye_color,
//   };
// });

// console.log(kisiler);
// REDUCE
// 1. Tüm kisilerin toplam agirliklari
// const toplamAgirlik = characters.reduce((toplam, person) => {
//   toplam = toplam + person.mass;
//   return toplam;
// }, 0);

// console.log(toplamAgirlik);

// 2. Tüm kisilerin toplam boy uzunluklari
// const toplamUzunluk = characters.reduce((toplam, person) => {
//   toplam = toplam + person.height;
//   return toplam;
// }, 0);

// console.log(toplamUzunluk);

// 1. Tüm kisilerin ortalama agirliklari
// const ortalamaAgirlik = characters.reduce((toplam, person) => {
//   toplam = toplam + person.mass;
//   return toplam;
// }, 0) / characters.length;

// console.log(ortalamaAgirlik);

// 2. Tüm kisilerin ortalama boy uzunluklari
// const ortalamaUzunluk =
//   characters.reduce((toplam, person) => {
//     toplam = toplam + person.height;
//     return toplam;
//   }, 0) / characters.length;

// console.log(ortalamaUzunluk);

// FILTER
// 1. Agirligi 100 den kücük olan kisiler
// const kisiler = characters.filter((person) => {
//   return person.mass < 100;
// });

// console.log(kisiler);
// 2. Tüm erkek karakterler
// const erkekler = characters.filter((person) => {
//   return person.gender == "male";
// });

// console.log(erkekler);

// SORT
// 1. Uzunluga göre sirala A-Z
// const siralaUzunluk = characters.sort((a, b) => {
//   return a.height - b.height;
// });

// console.log(siralaUzunluk);
// 2. Kiloya göre sirala Z-A
// const siralaAgirlik = characters.sort((a, b) => {
//   return b.mass - a.mass;
// });

// console.log(siralaAgirlik);

// EVERY
// 1. Hepsinin gözü mavi mi?
// const sonuc = characters.every((person) => {
//   return person.eye_color == "blue";
// });

// console.log(sonuc);

// SOME
// 1. En ay bir kisinin gözü mavi mi?

const sonuc = characters.some((person) => {
  return person.eye_color == "blue";
});

console.log(sonuc);
