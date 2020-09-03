const container = document.querySelector(".container");
const size = document.querySelector("#size");
const reset = document.querySelector("#reset");

createGrid(16, 16);
draw();

function newSize() {
    let newSize = parseInt(window.prompt("Please enter your desired # of squares per side"));
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        newSize = 16;
    };
    container.innerHTML = "";
    createGrid(newSize, newSize);
    draw();
}

function clearGrid() {
    const cells = document.querySelectorAll(".grid");
    cells.forEach(cells => {
        cells.classList.remove("draw");
    }); draw();
}

function createGrid(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid';
    }
}

function draw() {
    const cells = document.querySelectorAll(".grid");
    cells.forEach(cells => {
        cells.addEventListener("mouseover", function () {
            cells.classList.add("draw");
        })
    })
}

size.addEventListener("mouseup", newSize);
reset.addEventListener("mouseup", clearGrid);