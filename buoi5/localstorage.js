localStorage.setItem("name", "Nhi");
localStorage.setItem("age", "14");
localStorage.setItem("location", "Berlin");

let studentName = localStorage.getItem("name");
console.log(studentName);
localStorage.removeItem("name");
// localStorage.clear();