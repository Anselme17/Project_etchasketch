let container = document.querySelector(".container");
let chggrid = document.querySelector(".changegrid");

let textbtn = document.createElement("p");
textbtn.classList.add("contentchangegrid");
textbtn.textContent = "Choisissez la taille de votre grille :  "
chggrid.appendChild(textbtn);

let inputwidth = document.createElement("input")
inputwidth.classList.add("contentchangegrid");
inputwidth.placeholder = "Largeur (ex: 16)";
chggrid.appendChild(inputwidth);

let inputheight = document.createElement("input")
inputheight.classList.add("contentchangegrid");
inputheight.placeholder = "Hauteur (ex: 16)";
chggrid.appendChild(inputheight);

let changebutton = document.createElement("button");
changebutton.classList.add("contentchangegrid");
changebutton.textContent = "Générer"
chggrid.appendChild(changebutton);

function random(max) {
    return Math.floor(Math.random() * (max + 1));
}

function bgChange(e) {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    e.target.style.backgroundColor = rndCol;
}

changebutton.addEventListener("click", () => {
    let w = parseInt(inputwidth.value) || 16;
    let h = parseInt(inputheight.value) || 16;
    generateGrid(w, h);
});

function generateGrid(cols, rows) {
    container.innerHTML = "";

    // On ajuste dynamiquement la taille de chaque box en %
    const boxSize = 100 / cols;

    for (let i = 0; i < cols * rows; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${boxSize}%`;
        box.addEventListener("mouseenter", bgChange);
        container.appendChild(box);
    }
}

