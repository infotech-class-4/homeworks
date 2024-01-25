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
const isim = characters.map((item) => { // (4) ['Luke Skywalker', 'Darth Vader', 'Leia Organa', 'Anakin Skywalker']
  return item.name;
});

console.log(isim);

// 2. Tüm kisilerin boylarinin dizisini al

const boy = characters.map((item) => { // (4) [172, 202, 150, 188]
  return item.height
})
console.log(boy);

// 3. Tüm kisilerin agirliklarinin dizisini al

const agırlık = characters.map((item) => { // (4) [77, 136, 49, 84]
  return item.mass
})
console.log(agırlık);

// 4. Yalnizca adi ve göz reklerini iceren dizi olustur

const isimVeGoz = characters.map((item) => {  // (4) [{…}, {…}, {…}, {…}], 
  return {       // 0 {adi: 'Luke Skywalker', goz_rengi: 'blue'}
    adi: item.name,
    goz_rengi: item.eye_color
  }
})
console.log(isimVeGoz);


// REDUCE
// 1. Tüm kisilerin toplam agirliklari

const agırlıkToplamı = characters.reduce((acc, item) => {
  return (acc = acc + item.mass)
},0)
console.log(agırlıkToplamı); // 346


// 2. Tüm kisilerin toplam boy uzunluklari

const uzunlukToplamı = characters.reduce((acc, item) => {
  return (acc = acc + item.height)
},0)
console.log(uzunlukToplamı); // 712



// 1. Tüm kisilerin ortalama agirliklari
const agırlıkOrtalama = characters.reduce((acc, item) => {
  return (acc = acc + item.mass)
},0) / characters.length
console.log(agırlıkOrtalama); // 86.5


// 2. Tüm kisilerin ortalama boy uzunluklari

const uzunlukOrtalama = characters.reduce((acc, item) => {
  return (acc = acc + item.height)
},0) / characters.length
console.log(uzunlukOrtalama); // 178

// FILTER
// 1. Agirligi 100 den kücük olan kisiler

const yuzdenKucukler = characters.filter((item) => {
  return item.mass < 100  // (3) [{…}, {…}, {…}]
})
console.log(yuzdenKucukler);

// 2. Tüm erkek karakterler
const erkekler = characters.filter((item) => {
  return item.gender == "male" // (3) [{…}, {…}, {…}]
})
console.log(erkekler);

// SORT
// 1. Uzunluga göre sirala A-Z

const uzunluk = characters.sort((first,second) => {
  return first.height - second.height //(4) [{…}, {…}, {…}, {…}]
})
console.log(uzunluk);


// 2. Kiloya göre sirala Z-A

const kilo = characters.sort((first,second) => {
  return second.mass - first.mass  //(4) [{…}, {…}, {…}, {…}]
})
console.log(kilo);


// EVERY
// 1. Hepsinin gözü mavi mi?

const mavi = characters.every((item) => {
  return item.eye_color == "blue"
})
console.log(mavi); // false


// SOME
// 1. En ay bir kisinin gözü mavi mi?

const maviDegil = characters.some((item) => {
  return item.eye_color == "blue"
})
console.log(maviDegil); // true

