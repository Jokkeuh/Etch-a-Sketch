
const amount = document.getElementById("amount")
let color ="Black"

function createGrid(amount) {

    let container = document.querySelector(".container");
    container.style.gridTemplateRows =`repeat(${amount}, 1fr)`;
    container.style.gridTemplateColumns =`repeat(${amount}, 1fr)`;

    for(let c = 0; c < (amount * amount); c++){
        let cell = document.createElement("div1");
        cell.addEventListener("mouseover", cellColor);
        cell.style.backgroundColor ="white";
        container.insertAdjacentElement("beforeend" ,cell);
    }
}

function changeAmount(amount){
    if(amount > 150 || amount < 0){
        alert(`Number too high or negative :${amount}`);
    }
    else{
        createGrid(amount);
    }
}

function cellColor(){ 
    if(color === 'random'){
        this.style.backgroundColor = `hsl(${Math.random()* 360}, 100%, 50%)`
    }
    else{
        this.style.backgroundColor = color;
}
}

function changeColor(choice){
    color = choice;
}

function resetGrid(cell){
    changeAmount(16)
    cell = document.querySelectorAll("div1");
    cell.forEach(div => div.remove());
};
 