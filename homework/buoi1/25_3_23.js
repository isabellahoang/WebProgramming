// task 1 //

let x = -4;

if (x < 0) {
    alert("x la so am");
}

else if (x == 0) {
    alert("x la so 0");
}
else if (x > 0 && x % 1 == 0 ) {
    alert("x la so nguyen duong");
}

else {
    alert("x la so thap phan duong");
}

// task 2 //

let x = 1
let y = 3
let z = 4

let max;

if (x < y) {
    max = b;
}

else if (max > z) {
    max = z;

console.log("The largest number is: " + max)

// task 3 //

let x = 8.5

if (x >= 9.0) {
    alert("hoc sinh xep hang A")
}

else if (x >= 7.0 && x < 9.0) {
    alert("hoc sinh xep hang B");
}

else if (x >= 5.0 && x < 7.0) {
    alert("hoc sinh xep hang C");
}

else {
    alert("hoc sinh xep hang F")
}

// task 4 //

function quadraticFormula(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    if ( discriminant < 0) {
        console.log("this quadratic has no real solutions");
    }
    else if ( discriminant === 0) {
        let solution = ( -1 * b)/(2 * a);
        console.log("the solution of this quadratic is x = " + solution +".");
    }
    else {
    let solutionOne = ( -1 * b - Math.pow(discriminant, 0.5))/(2 * a);
    let solutionTwo = ( -1 * b - Math.pow(discriminant, 0.5))/(2 * a);
    console.log("the lesser solution of this quadratic x = " + solutionOne + ".");
    console.log("the greater solution of this quadratic x = " + solutionTwo + ".");
    }
}
quadraticFormula(3, 4, 8);
