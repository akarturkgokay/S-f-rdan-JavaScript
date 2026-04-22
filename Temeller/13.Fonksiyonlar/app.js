// // // Fonksiyon tnaımlama

// // // function merhaba(){
// // //     console.log("Merhaba")
// // // }
// // // merhaba(); // Fonksiyon Çağrısı (Function Call)

// // function merhaba(name = "Bilgi Yok", age = "Bilgi Yok") {
// //     // if (typeof name === "undefined") name = "Bilgi Yok";
// //     // if (typeof age === "undefined") age = "Bilgi Yok";
// //     console.log(`İsim ${name} Yaş: ${age}`)
// // }
// // merhaba("Gökay", 27); // Fonksiyon Çağrısı (Function Call)
// // merhaba("Bilge", 27); // Fonksiyon Çağrısı (Function Call)
// // merhaba();
// // merhaba("Kadir");

// function squre(x) {
//     return x * x;

//     // console.log("Naber");  Hiçbir zzaman çalıştırılmaz.
// }
// function cube(x) {
//     return x * x * x;
// }

// let a = cube(squre(12));
// console.log(a);

// IIFE)(ımmediately ınvokes function expression)
// (function(name){
// console.log("Merhaba :" + name);
// })("Murat");



const database = {
    host: "localhost",
    add: function () {
        console.log("Eklendi.");
    },
    get: function () {
        console.log("Elde Edildi.");
    },
    update: function (id) {
        console.log(`ID: ${id} Güncellendi.`);
    },
    delete: function (id) {
        console.log(`ID: ${id} Silindi.`);
    },
}

console.log(database.host);
database.add();
database.delete("a");
