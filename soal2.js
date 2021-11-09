//menghitung total belanjaan Bu Astuti

let barang = [
    { nama: "Beras", harga: 10000, jumlah: 5},
    { nama: "Gula", harga: 14000, jumlah: 5},
    { nama: "Telur", harga: 20000, jumlah: 2},
    { nama: "Minyak Goreng", harga: 9000, jumlah: 10}
]

console.log("==========TOTAL BELANJAAN==========")
var _harga =0;
var harga_total = 0;
barang.map(
    (bar, index) => {
        console.log("Nama barang   :  " + bar.nama +"\nHarga         :  "  + bar.harga + "\nJumlah Barang :  " + bar.jumlah + "\nTotal Harga   :  " + bar.harga * bar.jumlah + "\n ");
_harga = bar.harga*bar.jumlah;
harga_total +=_harga;
    }
)

const cetakNama = (nama) => `Total belanjaan ${nama} yang perlu dibayarkan adalah Rp. ${harga_total}`;
console.log(cetakNama("Bu Astuti"));
