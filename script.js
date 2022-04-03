


function createGrid(amount) {
    let container = document.querySelector(".container");
    container.style.gridTemplateRows =`repeat(${amount}, 1fr)`;
    container.style.gridTemplateColumns =`repeat(${amount}, 1fr)`;

    for(let c = 0; c < (256* 2); c++){
         let cell = document.createElement("div");
        cell.style.backgroundColor ="black"
        container.insertAdjacentElement("beforeend" ,cell);
    
        }
}

function resetGrid(){

}
 