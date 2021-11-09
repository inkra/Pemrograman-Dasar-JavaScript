//Membeli tanah ukuran 20,5m x 30m 
//Harga 1.500.000/m2
//PPN 15%

let panjang = 20.5;
let lebar = 30;
let luasTanah = panjang*lebar;
const hargaTanahPerMeter = 1500000;
let hargaTanah = hargaTanahPerMeter*luasTanah;
const ppn = (15/100)*hargaTanah;
let hargaTotal = ppn+hargaTanah;

console.log("===================== MENGHITUNG HARGA TANAH =====================");
const cetakNama = (nama) => `Panjang     :  ${panjang}m \nlebar       :  ${lebar}m \nLuas tanah  :  ${luasTanah}m2 \nHarga tanah : Rp. ${hargaTanahPerMeter} per m2 \nPPN         :  Rp. ${ppn}. \nJadi nominal yang harus ${nama} bayarkan adalah Rp. ${hargaTotal}`;
console.log(cetakNama("Pak Arman"));

