// Dİnamik Element silme

const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");

// remove Metodu

// todos[1].remove();

// Remove Child

// todoList.removeChild(todoList.lastElementChild);
todoList.removeChild(todos[todos.length - 1])
todoList.removeChild(todos[2]);

console.log(todoList);
console.log(todos);