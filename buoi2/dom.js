// let isa1 = document.getElementById
//("isa1");
//isa1.style = "color: white";
//isa1.style = "background-color: red; color: white";
//console.log(isa1.innerHTML);
// let isa2 = document.getElementById("isa2");
// isa2.style = "background-color: blue; color: red; padding: 20px 10px ";
// isa1.innerHTML = "Isabella"

let divImg = document.getElementById("img");

divImg.style = "border: 1px solid red; height: 100px";

let img = document.createElement("img");
img.src = "https://th.bing.com/th?id=OIP.XzWhI9KIQ7P9RY9dVqYoUAHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2";
img.style = "width: 100%";
//console.log(img);
divImg.appendChild(img);