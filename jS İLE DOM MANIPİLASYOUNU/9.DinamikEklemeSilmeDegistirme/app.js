const todoInput = document.getElementById("todo");

let element;

element = todoInput ;
element = todoInput.classList;

// todoInput.classList.add("NewClass");
// todoInput.classList.add("NewClass3");
// todoInput.classList.remove("form-control");

element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder","Naber");
todoInput.setAttribute("title","Input");
todoInput.removeAttribute("name");

element = todoInput.hasAttribute("name");

console.log(element);