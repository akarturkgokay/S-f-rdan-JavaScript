// Yeni bir element oluşturma
// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>               

const newLink = document.createElement("a");

const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com/"
newLink.target = "_blank";

// Text content

// cardbody.textContent = "lkdfnadlfnals"

// Text Node

// const text = document.createTextNode("Naber");
// cardbody.appendChild(text);

newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));
cardbody.appendChild(newLink);

console.log(newLink);