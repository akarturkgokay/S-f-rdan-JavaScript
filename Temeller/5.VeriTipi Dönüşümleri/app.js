let value;

// Veri Tiplerini Stiringe çevirme

value = String(123);
value = String(3.14);
value = String(true);
value = String(false);
value = String(function () { console.log() });
value = String([1, 2, 3, 4]);

value = (20).toString();

console.log(value);
console.log(typeof value);

// Veri Tiplerini Sayılara Çevirme

let value2;

value2 = Number("123");  // Sayıya Çevrilir
value2 = Number("null"); // Sayıya Çevrilir
value2 = Number("null"); // Sayıya Çevrilmez
value2 = Number("Hello World"); // Sayıya Çevrilmez
value2 = Number(function () { console.log() }); // Sayıya Çevrilmez
value2 = Number([1, 2, 3, 4]); // Sayıya Çevrilmez

value2 = parseFloat("3.14"); // Sayıya Çevrilir
value2 = parseInt("3");  // Sayıya Çevrilir

console.log(value2);
console.log(typeof value2);


const a = "Hello" + 34;
console.log(a);
console.log(typeof a);

