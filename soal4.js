let a = 4
let r = 3
let n = 10
let u = a
let s = a

console.log("Deret Geometrinya adalah : ");
for(let i=1;i<=n;i++){
    console.log("Suku Ke-" + i + " = " + u)
    u = u*r;
    s = s+u;
}

s = s-u;
console.log()
console.log("Total : " + s);