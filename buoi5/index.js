let names = ["Nhi1", "Nhi2", "Nhi3"];

/* for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
} */

// for of 
/* for ( let i of names) {
    console.log(i);
} */

let student = {
    studentName: "Nhi",
    age: 14,
    place: "Berlin",
    school: "Gymnasium Steglitz"
}

// for in: used for coding things in an object

for (let i in student) {
    console.log(student[i]);
}
