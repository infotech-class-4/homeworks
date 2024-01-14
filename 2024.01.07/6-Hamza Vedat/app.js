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

  //-MAP

  //1-SORU

  const yeniArray = characters.map((characters) => {
    return {
        name: characters.name,
    } ;
  });
  console.log(yeniArray);

  //2.SORU

  const yeniArray1 = characters.map((characters) => {
    return {
        height: characters.height,
    } ;
  });
  console.log(yeniArray1);

  //3.SORU

  const yeniArray2 = characters.map((characters) => {
    return {
        mass: characters.mass,
    } ;
  });
  console.log(yeniArray2);

  //4.SORU

  const yeniArray3 = characters.map((characters) => {
    return {
        name: characters.name,
        eye_color:characters.eye_color,
    } ;
  });
  console.log(yeniArray3);

  //--------------------------------------------------------------

  //REDUCE

  //1.SORU

  const massToplami = characters.reduce((acc,characters) => {
    return (acc = acc + characters.mass);
    }, 0) ;
  console.log(massToplami);

  //2.SORU

  const heightToplami = characters.reduce((acc,characters) => {
    return (acc = acc + characters.height);
    }, 0) ;
  console.log(heightToplami);

  //3.SORU

  const massAverage = characters.reduce((acc,item)=> {
    return acc = (acc + item.mass)/characters.length;
  },0)
console.log(massAverage);

const heightAverage = characters.reduce((acc,item)=> {
    return acc = (acc + item.height)/characters.length;
},0)
console.log(heightAverage);

  //--------------------------------------------------------------
  
  //FİLTER

  //1.SORU

  const massfilter = characters.filter((item) => {
    return item.mass <= "100";
  });
  console.log(massfilter);

  //2.SORU

  const genderfilter = characters.filter((item) => {
    return item.gender == "male";
  });
  console.log(genderfilter);

  //--------------------------------------------------------------
  
  //SORT

  const heightsort = characters.sort((a,b)=> {
    return a.height - b.height;
  });
  console.log(heightsort);

  //2.SORU

  const masssort = characters.sort((a,b)=> {
    return b.mass - a.mass;
  });
  console.log(masssort);

  //--------------------------------------------------------------
  
  //EVERY

  //1.SORU

  const blue_eye = characters.every((a)=>{
    return a.eye_color == "blue";
  });

  console.log(blue_eye);

  //--------------------------------------------------------------
  
  //SOME

  //1.SORU

  const minblue_eye = characters.some ((characters)=>{
    return characters.eye <= "blue";
  });
  console.log(minblue_eye);

