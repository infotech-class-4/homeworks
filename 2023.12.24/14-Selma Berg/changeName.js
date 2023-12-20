/* 3. Fonksiyona parametre olarak gelen 
indis numarasina gore ilgili ogrencini adina ulasip 
degistiren bir foksiyon olusturunuz.
*/ 

var myStudents = [ 
    { name: "Ahmet", surname: "Demir", school: "Noroff", class: "10/B", notes: [50,60,50] },
    { name: "Zeynep", surname: "Sari", school: "GET", class: "3/F", notes: [70,60,80] },
    { name: "Tarik", surname: "Kara", school: "Centric", class: "5/A", notes: [90,60,60] }, 
    { name: "Elif", surname: "Aker", school: "Oslo Met", class: "9/C", notes: [50,60,80] },
    { name: "Burhan", surname: "Keskin", school: "Kristiana", class: "7/E", notes: [50,90,70] }
];

function changeName( newName) {
    myStudents[3].name = newName;
    
}
changeName("Mehmet");
console.log(myStudents);