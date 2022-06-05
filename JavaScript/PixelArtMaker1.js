// Select color input
// Select height/width input
let picker = document.getElementById('sizePicker');
let color = document.getElementById('colorPicker');
const Canvas  = document.getElementById('pixelCanvas');

const height = document.getElementById('inputHeight').value;
const width = document.getElementById('inputWidth').value;


// Size is submitted, call makeGrid()
picker.addEventListener('submit', function(event){
    const height = document.getElementById('inputHeight').value; 
    const width = document.getElementById('inputWidth').value; 
    const Canvas = document.getElementById('pixelCanvas'); 
    event.preventDefault(); 
    makeGrid(height, width)
}); 

function makeGrid(height, width) {
    Canvas.innerHTML = "";
    for (var a= 0; a <= height; a++){
        const row = Canvas.insertRow(a); 
        for (var m = 0; m <= width; m ++){
            const cell = row.insertCell(m)
            cell.addEventListener('click', function(e){
                cell.style.backgroundColor = color.value;
            })
        }
    }



}