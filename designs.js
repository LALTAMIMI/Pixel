// Select color input
// Select size input

let color = document.getElementById("colorPicker");
let height = document.getElementById("inputHeight");
let width = document.getElementById("inputWidth");
let pixel = document.getElementById("pixelCanvas");
let size = document.getElementById("sizePicker");

// When size is submitted by the user, call makeGrid()
color.addEventListener("click", function(){
  //console.log('the page was clicked');
})

size.onsubmit = function(event){
    event.preventDefault();
    clearColor();
    makeGrid();
};

function makeGrid() {
// Your code goes here!
    for (let i=0; i<height.value; i++){
        const row = pixel.insertRow(i);
        for (let x=0; x<width.value; x++){
            const cell = row.insertCell(x);
            cell.addEventListener("click", addColor);
        }
    }
}

function clearColor(){
    while (pixel.firstChild){
         pixel.removeChild(pixel.firstChild);
    }
}


function addColor () {
    if (this.setAttribute("style", color)){
      this.removeAttribute("style", color);
    }
    else {
    this.setAttribute("style", `background-color: ${color.value}`);
    }

}
