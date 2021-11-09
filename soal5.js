class Lingkaran{
    constructor(r, phi){
        this.r = r;
        this.phi = phi;
    }

    luas = () => {
        return this.phi * this.r * this.r; 
    }

    keliling = () => {
        return this.phi * (2*this.r);
    }
}

class Tabung extends Lingkaran{
    constructor(r, phi, t){
        super(r, phi);
        this.tinggi = t;
    }

    volume = () => {
        return this.phi*this.r*this.r*this.tinggi;
    }

    luasPermukaan = () => {
        //2πr + (r + t) 
        return 2*this.phi*this.r * (this.r+this.tinggi);
    }

    luasSelimut = () => {
        //2 x phi x jari-jari
        return 2*this.phi*this.r*this.tinggi;
    }

}

let s;

class Kerucut extends Lingkaran{
    constructor(r, phi, t){
        super(r, phi);
        this.tinggi = t;

    s = Math.sqrt((this.r*this.r) + (this.tinggi*this.tinggi));
    }

    volume = () => {
        //1/3 phi r^2 t
        return 1/3 *this.phi*this.r*this.r*this.tinggi;
    }

    luasPermukaan = () => {
        //πr + (s + r) 
        return this.phi*this.r * (s+this.r);
    }

    luasSelimut = () => {
        //phi r s
        return this.phi*this.r*s;
    }

}

class Bola extends Lingkaran{
    volume = () => {
        //4/3 phi r^3 
        return 4/3 * this.phi*this.r*this.r*this.r;
    }

    luasPermukaan = () => {
        //4 phi r^2 
        return 4*this.phi*this.r *this.r;
    }
}

//Menjalankan luas permukaan dan volume bola sepak
let bolaSepak = new Bola(15, 3.14);
console.log("========== BOLA SEPAK ========");
console.log("Luas bola     :  " + bolaSepak.luasPermukaan());
console.log("Volume bola   :  " + bolaSepak.volume());

//Menjalankan volume, luas permukaan dan volume cone parkir
let coneParkir = new Kerucut(10, 3.14, 40);
console.log("========== CONE PARKIR ========");
console.log("garis singgung       :  " + s);
console.log("Luas permukaan cone  :  " + coneParkir.luasPermukaan());
console.log("Luas selimut cone    :  " + coneParkir.luasSelimut());
console.log("Volume cone parkir   :  " + coneParkir.volume());

//Menjalankan luas permukaan dan volume bola sepak
let gelas = new Tabung(7.5, 3.14, 50);
console.log("========== GELAS ========");
console.log("Luas permukaan gelas :  " + gelas.luasPermukaan());
console.log("Luas selimut gelas   :  " + gelas.luasSelimut());
console.log("Volume gelas         :  " + gelas.volume());