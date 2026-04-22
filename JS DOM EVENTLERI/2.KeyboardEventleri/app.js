// Klavye Eventleri


// keypress


// document.addEventListener("keypress",run);

// function run(e){

//     // console.log("Naber");
//     // console.log(e);
//     console.log(e.key);
//     // console.log(e.which);
    
// };


// keydown



// document.addEventListener("keydown",run);

// function run(e){

//     // console.log("Naber");
//     // console.log(e);
//     console.log(e.key);
//     // console.log(e.which);
    
// };



// keyup

// document.addEventListener("keyup",run);

// function run(e){

//     // console.log("Naber");
//     // console.log(e);
//     console.log(e.key);
//     // console.log(e.which);
    
// };


const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",keyInput)

function keyInput(e){
    console.log(e.target.value);
    header.textContent = e.target.value;
}

