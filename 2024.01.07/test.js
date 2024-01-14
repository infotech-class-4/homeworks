// // promise nedir

// // --------- BACKEND TARAFI ----------------
// // promiselerin yazilmasi

// const loginOlduMu = false; // 3000ms
// const makalesiVarMi = true; // 2000ms

// const loginPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (loginOlduMu) {
//         resolve("login islemi basarili");
//         //   resolve({ kullaniciAdi: "Osman", sifre: "adasdasd" });
//       } else {
//         reject("login islemi BASARISIZ!!");
//       }
//     }, 3000);
//   });
// };

// const makalePromise = () => {
//   const sonuc = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (makalesiVarMi) {
//         resolve("makaleler yüklendi");
//       } else {
//         reject("makelesi BULUNAMADI!!");
//       }
//     });
//   }, 2000);
//   return sonuc;
// };

// // -------------------------

// // --------- FRONTEND TARAFI ----------------
// // promiselerin kullanilmasi
// loginPromise()
//   .then((loginSonucu) => {
//     console.log(loginSonucu);
//     makalePromise()
//       .then((makaleSonucu) => {
//         console.log(makaleSonucu);
//       })
//       .catch((makaleHata) => {
//         console.warn(makaleHata);
//       });
//   })
//   .catch((loginHata) => {
//     console.warn(loginHata);
//   });

const aa = fetch("https://jsnplaceholder.typicode.com/todos/1");
// .then((response) => response.json())
// .then((json) => console.log("json"));

console.log(
  aa
    .then((resolve, reject) => {
      console.log(reject);
      return resolve.json();
    })
    .then((json) => {
      setTimeout(() => {
        console.log(json);
      }, 1000);
    })
    .catch((e) => {
      console.log("hata olustu", e);
    })
);
