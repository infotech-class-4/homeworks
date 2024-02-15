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

const isimlerArray = characters.map((item) => {
  let nameOfThePerson = item.name;
  return nameOfThePerson;
});

console.log(isimlerArray);
// 2. Tüm kisilerin boylarinin dizisini al

const boylarArray = characters.map((item) => {
  let heightOfThePerson = item.height;
  return heightOfThePerson;
});

console.log(boylarArray);
// 3. Tüm kisilerin agirliklarinin dizisini al
const massArray = characters.map((item) => {
  let massOfThePerson = item.mass;
  return massOfThePerson;
});

console.log(massArray);
// 4. Yalnizca adi ve göz reklerini iceren dizi olustur

const nameAndEyeColorArray = characters.map((item) => {
  return { personName: item.name, personColor: item.eye_color };
});
console.log(nameAndEyeColorArray);

// REDUCE
// 1. Tüm kisilerin toplam agirliklari

const sumMass = characters.reduce(
  (accumulator, currentValue) => accumulator + currentValue.mass,
  0
);

console.log("Toplam Agirliklari:" + sumMass);
// 2. Tüm kisilerin toplam boy uzunluklari
const sumHeight = characters.reduce(
  (accumulator, currentValue) => accumulator + currentValue.height,
  0
);

console.log("Toplam Boy Uzunluklari:" + sumHeight);
// 1. Tüm kisilerin ortalama agirliklari
const averageMass = characters.reduce(
  (accumulator, currentValue, index, array) => {
    accumulator += currentValue.mass;

    // Dizinin son elemanına geldiğimizde ortamayı hesapla
    if (index === array.length - 1) {
      return accumulator / array.length;
    } else {
      return accumulator;
    }
  },
  0
);

console.log("Ortalama Agirlik: " + averageMass);

// 2. Tüm kisilerin ortalama boy uzunluklari

const averageHeight = characters.reduce(
  (accumulator, currentValue, index, array) => {
    accumulator += currentValue.height;

    if (index === array.length - 1) {
      return accumulator / array.length;
    } else {
      return accumulator;
    }
  },
  0
);
console.log("Ortalama Boy: " + averageHeight);
// FILTER
// 1. Agirligi 100 den kücük olan kisiler
// 2. Tüm erkek karakterler
const agirligiYüzdenKücükler = characters.filter((item) => {
  return item.mass < 100;
});
console.log(agirligiYüzdenKücükler);

const erkekKarakterler = characters.filter((item) => {
  return item.gender == "male";
});

console.log(erkekKarakterler);
// SORT
// 1. Uzunluga göre sirala A-Z
const boyaGöreSirali = characters.sort((a, b) => {
  return a.height - b.height;
});

console.log(boyaGöreSirali);
// 2. Kiloya göre sirala Z-A

const sortedCharactersByMassAtoB = characters.sort((a, b) => b.mass - a.mass);

console.log(sortedCharactersByMassAtoB);

const sortedCharactersByMassBtoA = characters.sort((a, b) => b.mass - a.mass);

console.log(sortedCharactersByMassBtoA);

// EVERY
// 1. Hepsinin gözü mavi mi?

const hasEveyCharacterBlueEyeColor = characters.every((item) => {
  return item.eye_color === "blue";
});

console.log(hasEveyCharacterBlueEyeColor);

// SOME
// 1. En ay bir kisinin gözü mavi mi?

const hasOneOfTheCharacterBlueEyeColor = characters.some((item) => {
  return item.eye_color === "blue";
});

console.log(hasOneOfTheCharacterBlueEyeColor);
