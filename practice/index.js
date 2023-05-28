// function definition:
function greet(name, lastname) {
    console.log("Hello " + name + " " + lastname);
}

// run, call, execute ( must do for function to run ==> otherwise nothing is gonna happen):
greet("Isabella", "Hoang");

// REMEMBER: console.log will only run if the function gets called outside of the function
---------------------------------------------------------------------------------------------------------
// adder with console.log :

function adder(a, b, c, d) {
    console.log (a + b + c + d);
}

adder (2, 4, 3, 7)

// adder with return :

function adder1(e, f, g) {
    return e + f + g; // returns go inside of function, console.log go outside and inside
}

let x / var result = adder1(1, 6, 8);
console.log(x / result); // or :
adder1(1, 6, 8)

// arrays :

let selectedColors = ["red", "blue"];
selectedColors[2] = "green" / 1; // adding item
console.log(selectedColors[0]); // 0 = (first) index, first color = first index ==> 0
// 0 = 1st item, 1 = 2nd item...

// DOM :

--- getElementById ---

<h1 id ="header">Hello</h1>

<script>
    let x = document.getElementById("header");
    console.log(x);
</script>

--- getElementByClassName ---

<div class = "idk">Hello</div>

<script>
    let x = document.getElementByClassName("idk");
    console.log(x);
</script>

--- getElementbyTagName ---

<p>hello</p>

<script>
    let x = document.getElementbyTagName("p");
    console.log(x);
</script>

--- querySelector ---

<ul>
    <li id ="hi">Hello</li>
    <li class ="hey">Hola</li>
</ul>

// for class:

<script>
    let x = document.querySelector(".hey");
    console.log(x);
</script>

// for id:

<script>
    let x = document.querySelector("#hi");
    console.log(x);
</script>

let justAName = document.getElementById("justaname");
justAName.onclick = function btnName() {
    justAName.remove();
}