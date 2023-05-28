let colorInput = document.querySelector('#color');
let hexOutput = document.querySelector('.hex');
let rgbOutput = document.querySelector('.rgb');
let square = document.querySelector('.square');

colorInput.addEventListener('input', () =>{
    let color = colorInput.value;
    console.log("color", color);
    hexOutput.textContent += color;
    rgbOutput.textContent += hexToRgb(color);
    square.style.backgroundColor = color;
})

function hexToRgb(hex) {
    // Remove the hash mark from the beginning of the hex string
    hex = hex.replace("#", "");
  
    // Extract the red, green, and blue components from the hex string
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
  
    // Concatenate the RGB components into an RGB string and return it
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }