function calculateSumT(x, y) {
    const topla = x + y;
  
    return topla;
  }
  
  console.log(calculateSumT(3, 4));
  
  function calculateSumC(x, y) {
    const cıkar = x - y;
  
    return cıkar;
  }
  
  console.log(calculateSumC(2, 5));
  
  function calculateSumX(x, y) {
    const carp = x * y;
  
    return carp;
  }
  
  console.log(calculateSumX(6, 6));
  
  function calculateSumB(x, y) {
    const bol = x / y;
    return bol;
  }
  
  console.log(calculateSumB(6, 2));
  
  console.clear();
  
 
  
 
  
 
  
  const renk = ["sarı", "yesil", "mavi", "gri"];
  
  renk[1] = "turuncu";
  renk[4] = "siyah";
  
  console.log(renk);
  
 
  
  const ogrenci = {
    name: "ahmet",
    class: "2/A",
    school: "akif i.ö",
    notes: [60, 70],
  };
  
  function average() {
    return ogrenci.notes[0] + ogrenci.notes[1] / length;
  }
  
  const sum = average();
  console.log(sum >= 60);