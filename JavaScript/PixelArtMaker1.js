// Select color input
// Select height/width input
let picker = document.getElementById('sizePicker');
let color = document.getElementById('colorPicker');
const Canvas = document.getElementById('pixelCanvas');

const height = document.getElementById('inputHeight').value;
const width = document.getElementById('inputWidth').value;


// Size is submitted, call makeGrid()
picker.addEventListener('submit', function(event) {
	event.preventDefault();
	makeGrid(height, width)
});

/**
 * @desc create a grid of squares 
 * @param int $width - number of squares representing the width of the grid
 * @param int $height - number of squares representing the height of the grid
 */

function makeGrid() {
	let height = inputHeight.value
	let width = inputWidth.value
	Canvas.innerHTML = '';

	for (let a = 1; a <= height; a++) {
		var row = document.createElement('tr');
		for (let m = 1; m <= width; m++) {
			var column = document.createElement('td');
			column.id = "column-i-j";
			row.appendChild(column);
			Canvas.appendChild(row);
		}
	}
}

makeGrid(height.value, width.value)

Canvas.addEventListener("click", function(event) {
	event.target.style.backgroundColor = colorPicker.value;
});
