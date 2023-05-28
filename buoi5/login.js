const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("data"));
    console.log(data);
    if (data == null) {
        alert("This field is required");
    } else {
        let username = document.getElementById("username").value;
        for (let i = 0; i < data.length; i++) {
            if (data[i].username == username && data[i].password == password) {
                alert("Successfull");
                return;
            }
        }
        alert("Username or password is wrong");
    }
});