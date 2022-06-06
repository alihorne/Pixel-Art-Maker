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

function makeGrid() {
    let height = inputHeight.value
    let width = inputWidth.value
  
    for (let a = 1; a <= height; a++) {
      var row = document.createElement('tr') ;
      for (let m = 1; m <= width; m ++) {
        var column = document.createElement('td');
        column.id = "column-i-j";
        
  
        row.appendChild(column);
  
        Canvas.appendChild(row);

  
      }
    }
} 

Canvas.addEventListener("click", function (event) {
    event.target.style.backgroundColor = colorPicker.value;
  });
