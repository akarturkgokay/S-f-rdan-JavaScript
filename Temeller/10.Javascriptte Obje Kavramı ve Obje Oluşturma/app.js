let value;

const programmer = {
    name: "Gökay Akartürk",
    age: 27,
    email: "gokayakarturk@gmail.com",
    langs: ["Python", "java", "javascript"],
    adress: {
        city: "İstanbul",
        street: "Sultangazi"
    },
    work: function () {
        console.log("Programcı çalışıyor...")
    }
}

value = programmer;
value = programmer.email;
value = programmer.adress.city;
programmer.work();


const programmers =[
    {names: "Gökay", age:25},
    {names: "Bilge", age:25}
];
value.programmers[0].name;
console.log(value);