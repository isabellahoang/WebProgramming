registerButton.addEventListener("click", (e) => {
    e.preventDefault();
    let userInfo = {
        email: document.getElementById("email").value,
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        password: document.getElementById("password").value
    }

    data.push(userInfo);
    alert(userInfo);
    localStorage.setItem("data", JSON.stringify(data));
})

for (let i = 0; i < data.length; i++) {
    if (data[i].email == email && data[i].password == password) {
        alert("Successfull");
        location = "vintagefabrik.html";
    } 
    alert("Email or Password is wrong");
} 