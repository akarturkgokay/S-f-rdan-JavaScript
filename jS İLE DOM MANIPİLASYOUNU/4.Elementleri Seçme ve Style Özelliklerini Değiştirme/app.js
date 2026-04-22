// const element = document.querySelector("#clear-todos");

// ELement Özellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);

// Style ve Element Özelliklerini Değiştirme

// element.className = "btn btn-primary";
// element.style.color = "pink";
// element.style.marginLeft = "50px";
// element.href = "https://www.google.com/";
// element.target = "_blank";

// element.textContent = "Silin";
// element.innerHTML = "<span style = 'color: green'> SİLİN </span>"

// const elements = document.querySelectorAll(".list-group-item");

// elements.forEach(function(el){
//     el.style.color = "red";
//     el.style.background = "purple";
// })


let element = document.querySelector("li:last-child");
element = document.querySelector("li:nth-child(2)");
element = document.querySelector("li:nth-child(3)");
element = document.querySelector("li:nth-child(4)");
element = document.querySelectorAll("li:nth-child(odd)");
element = document.querySelectorAll("li:nth-child(even)");

element.forEach(function(el){
    el.style.color="red";
    el.style.background="#ccc";
    
});

// console.log(element);