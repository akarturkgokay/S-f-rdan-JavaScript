const person = {
    name: "Gökay Akartürk",
    age: 28,
    salary: 50000
};

const langs = ["Python", "Java" , "PHP", "C++"];

const name = "Gökay";

// For In


// Object
// for(let i in person){
//     console.log(i,person[i]);
// }


// Array
// for (let i in langs){
//     console.log(i, langs[i]);
// }


// String
// for (let index in name){
//     console.log(index, name[index]);
// }


// For Of


for (let value of langs){
    console.log(value);
}