import ornekUcgen from './UcgenInstance';

// Çevre ve alanı hesapla
const cevre = ornekUcgen.hesaplaCevre();
const alan = ornekUcgen.hesaplaAlan();

// Sonuçları yazdır
console.log("Üçgenin Çevresi:", cevre);
console.log("Üçgenin Alanı:", alan);