while loop:
let n = 10;
let i = 1; //bieu thuc 1 khoi tao bien lap
while (i <= n) { //bieu thuc 2: die kien lap
    console.log(i);
    i++, //bieu thuc 3: thay doi bien lap sau moi lan
}

// do-while loop: executes the function first and then checks condition
 
do {
    console.log(i);
    i++;
} while (i <= n);

console.log(i);

// for loop:
for (let i = 10; i > 0; i--) {
    console.log(i);
}

const ul = document.getElementById("ul");

for ( let i = 1; i <= 100; i++) {
    let li = document.createElement("li");
    li.innerHTML = i;
    ul.appendchild(li);
}

// arrays:

let studentListName = ["Isa", "X", "Y", "Z"];
console.log(studentListName);
console.log(studentListName[0]);

for (let i = 0; i < studentListName.length; i++) {
    console.log(studentListName);
} 

let studentListName = ["Isa", "X", "Y", "Z"];
console.log(studentListName);
console.log(studentListName.push("new student")); // new object
console.log(studentListName);
studentListName.splice(5, 1)

console.log(studentListName[studentListName.length - 1]);

for (let i = studentListName.length - 1; i >= 0; i--) {
  if (studentListName[i] == "X") {
    console.log("X is at the" + i + "position");
  }
}

// object:

let teacher = {
    teacherName: "Thang",
    place: "HCM",
    country: "VN",
    company: "MindX"
}

console.log(teacher);
console.log(teacher.teacherName);
// update
teacher.place = "HN";
console.log(teacher);
// create new info
teacher.salary = "100M";
console.log(teacher);
// delete
delete teacher.salary
console.log(teacher);