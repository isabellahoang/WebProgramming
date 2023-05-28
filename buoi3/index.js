// task 1
 function  checkLeapYear(year) {
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        console.log("it's a leap year");
    }
    else {
        console.log("it's not a leap year");
    }
} 

checkLeapYear(2024);  

// task 2

function classifyTriangle (a, b, c) {
    if ( a + b + c != 180) {
        console.log("It's not a triangle");
    }
    else {
        if (a > 90 || b > 90 || c > 90) {
            console.log("It's a triangle");
        }
        else if ( a < 90 && b < 90 && c < 90 && a != c && a != b) {
            console.log("It's a sharp triangle");
        }
        else if (a == 90 ||b == 90 || c == 90) {
            console.log("It's a right triangle");
        }
        else {
            console.log("It's an equilateral triangle");
        }
    }
}

classifyTriangle(100, 30, 50)

// task 3

function calculateAreaOfRectangle(w, h) {
    let perimeter = (w + h) * 2;
    let area = w * h;
    console.log("The perimeter of this rectangle =  + perimeter);
    console.log("The area of this rectangle = " + area);
}

calculateAreaOfRectangle(3,8)
//task 4 

function circle(radius) {
    const pi = 3.14;
    let p = radius * 2 * pi;
    let a = radius * radius * pi;
    let d = radius * 2;
    console.log("Perimeter = " + p);
    console.log("Area = " + a);
    console.log("diameter = " + d);
}

circle(6)