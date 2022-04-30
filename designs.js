// Select color input
const selectColor = document.getElementById('colorPicker')
// Select size input
const selectSize = document.getElementById('pixelCanvas')

const selectHeight = document.getElementById('inputHeight');

const selectWidth = document.getElementById('inputWidth');

const submitBtn = document.getElementById('submitInput')
// When size is submitted by the user, call makeGrid()

// Event Listeners
submitBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    const tableRows = selectHeight.value;

    const tableCols = selectWidth.value;
    // makeGrid()
    makeGrid(tableRows, tableCols);
});

function makeGrid(tableRows,tableCols) {
// Your code goes here!
    selectSize.innerHTML = '';
    for (let i = 1; i <= tableRows; i++) {
        const tableRow = document.createElement('tr')
        selectSize.appendChild(tableRow).classList.add(`tr`)
        tableRow.setAttribute('id', `${i}`)
        for (let j = 1; j <= tableCols; j++) {
            const tableCol = document.createElement('td')
            tableRow.appendChild(tableCol).classList.add(`td`)
            tableCol.setAttribute('id', `${i}by${j}`)
            tableCol.addEventListener('click', function(e){
                tableCol.style.backgroundColor = selectColor.value;
                });
            }
        }

}