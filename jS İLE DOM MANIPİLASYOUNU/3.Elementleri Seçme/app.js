// Elementi ID e göre Seçme

let element;

element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");


// Elementi Class a göre Seçme

element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("card-header");

// Elementi Tag e göre Seçme

element = document.getElementsByTagName("div");

// Query Selector - Css Selector Tek bir element seçer....

element = document.querySelector("#todo-form");
element = document.querySelector("#task-title");

element = document.querySelector(".list-group-item");

element = document.querySelector("li");
element = document.querySelector("div");

// Queryselectorall - Tüm elementleri seçer

element = document.querySelectorAll(".list-group.item");

element.forEach(function(el){
    console.log(el);
})

console.log(element);