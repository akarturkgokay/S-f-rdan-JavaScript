let value;

const numbers = [43, 54, 68, 78, 98, 52];

// const numbers2 = new Array(1,2,3,4,5,6,7);

const langs = ["Python", "Java", "C++", "JavaScript"];

const a = ["Merhaba", 22, null, undefined, 3.14];

// Uzunluk
value = numbers.length;

// İndexleme
value = numbers[0];
value = numbers[2];
value = numbers[numbers.length - 1];

// Herhangi bir indeksteki değeri değiştirme
numbers[2] = 1000;
value = numbers;

// İndex OF
value = numbers.indexOf(1000);

// Arraylerin sonuna değer ekleme 
numbers.push(2000);

// Arraylerin başına değer ekleme 
numbers.unshift(3000);
value = numbers;

// Sonundan Değer atma
numbers.pop()
value = numbers;

// Arraylerin başından değer ekleme 
numbers.shift()
value = numbers;

// Belli bir indexten belli bir indexe atmamızı sağlıyor

numbers.splice(0, 3) // 0. 1. ve 2. index atılır.
value = numbers;

// Reverse

numbers.reverse()
value = numbers;

//sort Küçükten büyüğe

value = numbers;
value = numbers.sort(function (x, y) {
    return x - y;
});
//sort Büyükten küçüğe
value = numbers;
value = numbers.sort(function (x, y) {
    return y - x;
});




console.log(value);
