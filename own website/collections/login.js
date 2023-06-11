const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", (e) => { 
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("data"));
    console.log(data);
    if (data == null) {
        alert("You must register first");
    } else {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        for (let i = 0; i < data.length; i++) {
            if (data[i].email == email && data[i].password == password) {
                alert("Successfull");
                location = "vintagefabrik.html";
                return;
            } 
            alert("Email or Password is wrong");
        } 
    }
});
