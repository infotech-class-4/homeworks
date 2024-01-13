const people = [
    {
      firstName: "Sam",
      lastName: "Hughes",
      DOB: "07/07/1978",
      department: "Development",
      salary: 45.000,
    },
    {
      firstName: "Terri",
      lastName: "Bishop",
      DOB: "02/04/1989",
      department: "Development",
      salary: 35.000,
    },
    {
      firstName: "Jar",
      lastName: "Burke",
      DOB: "11/01/1985",
      department: "Marketing",
      salary: 38.000,
    },
    {
      firstName: "Julio",
      lastName: "Miller",
      DOB: "12/07/1991",
      department: "Sales",
      salary: 40.000,
    },
    {
      firstName: "Chester",
      lastName: "Flores",
      DOB: "03/15/1988",
      department: "Development",
      salary: 41.000,
    },
    {
      firstName: "Madison",
      lastName: "Marshall",
      DOB: "09/22/1980",
      department: "Sales",
      salary: 32.000,
    },
    {
      firstName: "Ava",
      lastName: "Pena",
      DOB: "11/02/1986",
      department: "Development",
      salary: 38.000,
    },
    {
      firstName: "Gabriella",
      lastName: "Steward",
      DOB: "08/26/1994",
      department: "Marketing",
      salary: 46.000,
    },
    {
      firstName: "Charles",
      lastName: "Campbell",
      DOB: "09/04/1977",
      department: "Sales",
      salary: 42.000,
    },
    {
      firstName: "Tiffany",
      lastName: "Lambert",
      DOB: "05/11/1990",
      department: "Development",
      salary: 34.000,
    },
    {
      firstName: "Antonio",
      lastName: "Gonzalez",
      DOB: "03/24/1985",
      department: "Office Management",
      salary: 49.000,
    },
    {
      firstName: "Aaron",
      lastName: "Garrett",
      DOB: "09/04/1985",
      department: "Development",
      salary: 39.000,
    },
  ];
  
  // 1. Tüm kisilerin ortalama geliri nedir?
  const ortalamagelir  = people.reduce((acc,item) => {
    return acc = acc+item.salary;
    }, 0) / people.length ;
    
    console.log(ortalamagelir);


  // 2. Kisilerin tam adi '{...item, fullName: adi soyadi}' listesini olusturun

  const fullName = people.map((item) => { 
    return { 
        Name:item.firstName+"  "+item.lastName
          
  }})
  console.log(fullName);


  // 3. Her bölümde kac kisi var?

  const bölümkisi = people.reduce((bölümler,kisi) => {
    bölümler[kisi.department] = (bölümler[kisi.department] || 0) +1

    return bölümler
     
  })

  console.log(bölümkisi);
  
 