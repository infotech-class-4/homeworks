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
  const MyArray = characters.map((item) => {
    return {
        studentsName:item.name,
        studentsheight:item.height,
        studentsMass:item.mass,
        studentsEyeAndGender:{
            studentEye:item.eye_color,
            studentsGender:item.gender,
        },
    };
    
  })
    console.log(MyArray);


  // REDUCE
  // 1. Tüm kisilerin toplam agirliklari
  // 2. Tüm kisilerin toplam boy uzunluklari
  // 1. Tüm kisilerin ortalama agirliklari
  // 2. Tüm kisilerin ortalama boy uzunluklari
    const toplam = characters.reduce((acc,item)=> {
        return acc + item.height;
    },0)
    console.log(toplam);


    const toplam2 = characters.reduce((acc,item)=> {
        return acc + item.mass;
    },0)
    console.log(toplam2);


    const massAverage = characters.reduce((acc,item)=> {
        return acc = (acc + item.mass)/characters.length;
    },0)
    console.log(massAverage);

    const heightAverage = characters.reduce((acc,item)=> {
        return acc = (acc + item.height)/characters.length;
    },0)
    console.log(heightAverage);


  // FILTER
  // 1. Agirligi 100 den kücük olan kisiler
  // 2. Tüm erkek karakterler
  
  const mass_hundred=characters.filter((item)=>{
    return item.mass<100;

  })
  console.log(mass_hundred);


   
  const gender=characters.filter((item)=>{
    return item.gender=="male";

  })
  console.log(gender);


  
  // SORT
  // 1. Uzunluga göre sirala A-Z
  // 2. Kiloya göre sirala Z-A
  
  const sortHeight= characters.sort((a,b)=> a.height - b.height);

  console.log(sortHeight);

   
  const sortmass= characters.sort((a,b)=> a.mass - b.mass);

  console.log(sortmass);

   // EVERY
   
  // 1. Hepsinin gözü mavi mi?
  const every = characters.every((a)=>{
    return a.eye_color == "blue";

  })
  console.log(every);


 
  // SOME
  // 1. En ay bir kisinin gözü mavi mi?
  const someBlue = characters.some((a)=>{
    return a.eye_color == "blue";
  })
  console.log(someBlue);