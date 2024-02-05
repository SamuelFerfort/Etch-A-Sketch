const container = document.querySelector(".container");
const rows = document.getElementsByClassName("row");
const columns = document.getElementsByClassName("column");


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
            rows[i].appendChild(newColumn);
        }
    }


}
function makeGrid() {
    createRow(16);
    createColumn(16);
}
makeGrid();
console.log(rows)
console.log(columns)
