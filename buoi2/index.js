// ham khong co tham so
function hello() {
    console.log("Hello")
}

// hello(); // can also put it in other lines

// ham co tham so
function hello1(name) {
    console.log("Hello " + name);
}

// hello1("Isabella");

// ham co tra ve gia tri (return)
function sum(a, b, c) {
    return a + b + c;
}

let x = sum(3, 9, 4);
console.log(x);

// tru
function sub(a, b, c) {
    return a - b - c;
}

let x1 = sub(9, 3, 4);
console.log(x1);

// nhan
function mul(a, b, c) {
    return a * b * c;
}

let x2 = mul(3, 9, 2);
console.log(x2);

// chia 
function div(a, b, c) {
    return a / b / c;
}

let x3 = div(16, 4, 2);
console.log(x3);

// correction

// task 1
function PhanLoaiSo(x) {
    let phannguyen = Math.floor(x)
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
    
}

PhanLoaiSo(10.0);

// task 2

function max(a, b, c) {
    if (a < b) {
     max = b;
     } else {
    max = a;
    }
    if (max < c) {
    max = c;
    }
    console.log("Giá trị lớn nhất là: " + max);
}

max(10, 4, 8);

// task 3

function dtb(x) {
    if (x < 5) {
    console.log("Hạng F");
    } else if (x < 7) {
    console.log("Hạng C");
    } else if (x < 9) {
    console.log("Hạng B");
    } else {
    console.log("Hạng A");
    }
}

dtb(7);

// task 4

function quadraticFormula(a, b, c) {
    if (a == 0) {
        let x = -c / b;
        console.log("Nghiệm của phương trình là: " + x);
    } else {
        let delta = (b * b) - (4 * a * c);
        if (delta < 0) {
            console.log("Phương trình vô nghiệm");
        } else if (delta == 0) {
            let x = (-1 * b) / (2 * a);
            console.log("Phương trình có nghiệm kép, x = " + x);
        } else {
            let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a); 
            let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a);
            console.log("Phương trình có 2 nghiệm phân biệt: x1 = " + x1 + ";x2 = " + x2);
        }
    }    
}

quadraticFormula(2, 3, 7);