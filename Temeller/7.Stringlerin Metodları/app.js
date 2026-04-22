let value;

const firstname = "Louis";
const lastname = "Armstrong";

const langs = "Java,Python.C++";

value = firstname + lastname;
value = firstname + " " + lastname;
value = "Gökay Akartürk";
value += "Akartürk"; // value = value + "Akartürk";

value = firstname.length; // Karakter uzunluğu

value = firstname.concat("", lastname, "", "caz");

value = firstname.toLowerCase(); //küçük karakter yazma
value = firstname.toUpperCase(); //büyük karakter yazma

value = firstname[0]; // L karakterini yazar 0. index 1.index 2.index...... şeklinde gider...
value = firstname[2]; // U karakterini yazar 
value = firstname[4]; // S karakterini yazar Son karakter
value = firstname[firstname.length - 1]; // Bu yöntem son elamanı alır

// INDEX OF

value = firstname.indexOf("L");
value = firstname.indexOf("o");
value = firstname.indexOf("l"); // içinde herhangi birşey yoksa sonuç -1 yazar

// CHar At

value = firstname.charAt(0);
value = firstname.charAt(firstname.length - 1);

// Split

value = langs.split(",");

//Replace

value = langs.replace("Python", "CSS");

// Includes

value = langs.includes("Java");
value = langs.includes("dfjkdsglsbgbjads");





console.log(value);
