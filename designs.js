// Select color input
const selectColor = document.getElementById('colorPicker')

// Select size input
const selectSize = document.getElementById('pixelCanvas')

//select input height
const selectHeight = document.getElementById('inputHeight');

//select input width
const selectWidth = document.getElementById('inputWidth');

// select submit button
const submitBtn = document.getElementById('submitInput')

// When size is submitted by the user, call makeGrid()

// Event Listeners

//listen to events made once the submit button is clicked
submitBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    const tableRows = selectHeight.value;

    const tableCols = selectWidth.value;
    // makeGrid function
    makeGrid(tableRows, tableCols);
});

//this function is responsible for plotting the grid based on the input height and width
function makeGrid(tableRows,tableCols) {
// Your code goes here!
//allows the select size to be empty when ever the makeGrid function is called
    selectSize.innerHTML = '';
    for (let i = 1; i <= tableRows; i++) {
        const tableRow = document.createElement('tr')
       
//appends the tableRow and includes the class list 'tr' 
selectSize.appendChild(tableRow).classList.add(`tr`)
        tableRow.setAttribute('id', `${i}`)
        for (let j = 1; j <= tableCols; j++) {
            const tableCol = document.createElement('td')
            tableRow.appendChild(tableCol).classList.add(`td`)
            tableCol.setAttribute('id', `${i}by${j}`)
           
            //listens to add background color to the selected cell 
            tableCol.addEventListener('click', function(e){
                tableCol.style.backgroundColor = selectColor.value;
                });
            }
        }

}
