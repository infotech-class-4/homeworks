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

//! map()

//! 1. Tüm isimlerin dizisini al!

const nameArray= characters.map((item)=>{
  return item.name
})

console.log(nameArray);   //  ['Luke Skywalker', 'Darth Vader', 'Leia Organa', 'Anakin Skywalker']

//! 2. Tüm kisilerin boylarinin dizisini al

const heightArray=characters.map((item)=>{
  return item.height
})

console.log(heightArray);  // [172, 202, 150, 188]

//! // 3. Tüm kisilerin agirliklarinin dizisini al

const massArray= characters.map((item)=> item.mass) // bu sekilde de yazilabilir.tek bir veri dondurmesi istendigi icin return e gerek yok!
console.log(massArray);// [77, 136, 49, 84]

//! 4. Yalnizca adi ve göz reklerini iceren dizi olustur.
// bu sekilde birden fazla veri dondurmemizi istiyorsa, o zaman array icinde bir obje olusturmaliyiz.obje key lerini de yeniden belirleyebiliriz

const nameAndEyeColor= characters.map((item)=>{
  return {
    charName:item.name,
    charEye_color:item.eye_color}
})

console.log(nameAndEyeColor); 
// {charName: 'Luke Skywalker', charEye_color: 'blue'}
 
// {charName: 'Darth Vader', charEye_color: 'yellow'}

// {charName: 'Leia Organa', charEye_color: 'brown'}

// {charName: 'Anakin Skywalker', charEye_color: 'blue'}


//! reduce(acc, item)

//! 1. Tüm kisilerin toplam agirliklari

const sumMass = characters.reduce((acc,item)=>{
  return (acc=acc+item.mass)
},0)

console.log(sumMass); // 346


//!  1. Tüm kisilerin ortalama agirliklari

const avgMass= sumMass / characters.length
console.log(avgMass); // 86.5


//!  2. Tüm kisilerin toplam boy uzunluklari

const sumHeight= characters.reduce((acc, item)=>{
  return ( acc=acc+item.height)


},0)

console.log(sumHeight); // 712

//! 2. Tüm kisilerin ortalama boy uzunluklari

const avgHeight= sumHeight / characters.length;
console.log(avgHeight); // 178

//! filter()

//! 1. Agirligi 100 den kücük olan kisiler

const lessMass= characters.filter((item)=>{
  return item.mass < 100
})

console.log(lessMass);

//! 2. Tüm erkek karakterler

const männer= characters.filter((item)=>{
  return item.gender === "male"
})
console.log(männer); 

//! sort()

//! 1. Uzunluga göre sirala A-Z; buyukten kucuge..

const heightSort= characters.sort((a,b)=>{
  return b.height - a.height
})

console.log(heightSort);// 150, 172, 188, 202

//! 2. Kiloya göre sirala Z-A ; kucukten buyuge..

const massSort = characters.sort((a,b)=> a.mass - b.mass)
console.log(massSort); // 49, 77, 84,  136

//! every()

//! 1. Hepsinin gözü mavi mi?

const everyBlue= characters.every((item)=> item.eye_color == "blue")
console.log(everyBlue); // false

//! some()

//! 1. En az bir kisinin gözü mavi mi?

const someBlue= characters.some((item)=> item.eye_color === "blue")
console.log(someBlue); // true