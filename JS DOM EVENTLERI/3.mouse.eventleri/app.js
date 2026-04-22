const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

// // Click
// title.addEventListener("click",run);
// //Double Click
// title.addEventListener("dblclick",run);
// // Mouse Down tıklama ile aynı anda
// title.addEventListener("mousedown",run);
// Mouse Up bıraktığında
// title.addEventListener("mouseup",run);
// Mouse Over
// title.addEventListener("mouseover",run);
// Mouse Out
// title.addEventListener("mouseout",run);

// cardBody.addEventListener("mouseover",run);
// cardBody.addEventListener("mouseout",run);


// mOUSE ENTER VE mOUSE LEAVE

cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);

function run(e) {
    console.log(e.type);
}
