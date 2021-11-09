//menghitung BMI dan interpretasi BMI
//Tinggi badan 170cm dan berat badan 90kg

let tinggiBadan = 1.7;
let beratBadan = 90;
let status;
const bmi = beratBadan/(tinggiBadan*tinggiBadan);

if(bmi < 18.5){
    status = "Kekurangan berat badan";
} else if(bmi == 18.5 && bmi <= 24.9){
    status = "Normal(ideal)";
} else {
    status = "Kegemukan(obesitas)";
}

console.log("=============MENGHITUNG BMI & INTERPRETASI BMI==============");
const cetakNama = (nama) => `Nama                 :  ${nama} \nBerat badan          :  ${beratBadan} kg \nTinggi badan         :  ${tinggiBadan} m \nHasil BMI            :  ${bmi} \nStatus kondisi tubuh :  ${status}`;
console.log(cetakNama("Rhodey"));
