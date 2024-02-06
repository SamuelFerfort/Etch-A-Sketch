const container = document.querySelector(".container");
const rows = document.getElementsByClassName("row");
const columns = document.getElementsByClassName("column");
const resetColor = document.querySelector(".reset");
const randomColorBtn = document.querySelector(".random")
const black = document.querySelector(".black")


function createRow(rowNumber) {
    for (let i = 0; i < rowNumber; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        
        container.appendChild(row);
    }
}


function createColumn(columnNumber) {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < columnNumber; j++) {
            let newColumn = document.createElement("div");
            newColumn.classList.add("column");
            buttons(newColumn);
            
            rows[i].appendChild(newColumn);
        }
    }
}
function randomColor() {
    return Math.floor(Math.random() * 255);
}
function makeGrid() {
    createRow(16);
    createColumn(16);
}


function buttons (newColumn) {
    randomColorBtn.addEventListener("click", () => {
        newColumn.addEventListener("mouseenter", () => 
        newColumn.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`)
    })
    black.addEventListener("click", () => {
        newColumn.addEventListener("mouseenter", () => 
        newColumn.style.backgroundColor = `black`)})
    resetColor.addEventListener("click", () => newColumn.style.backgroundColor = "white")
}


makeGrid();
console.log(rows)
console.log(columns)
