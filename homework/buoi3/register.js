function onSubmit() {
    const email = document.getElementById('email')
    const username = document.getElementById('username')
    const password = document.getElementById('password')

    console.log("submit");
    if (email.value === '' || email.value == null) {
        document.getElementById("emailError").innerText = "Email is required"
    } else if (ValidateEmail(email.value) == false) {
        document.getElementById("emailError").innerText = "Email is not valid"
    } else {
        document.getElementById("emailError").innerText = ""
    }
    if (username.value === '' || username.value == null) {
        document.getElementById("usernameError").innerText = "Username is required"
    } else if (ValidateUsername(username.value) == false) {
        document.getElementById("usernameError").innerText = "Username is not valid"
    } else {
        document.getElementById("usernameError").innerText = ""
    }
    if (password.value === '' || password.value == null) {
        document.getElementById("passwordError").innerText = "Password is required"
    } 
    else if (ValidatePassword(password.value) == false) {
        document.getElementById("passwordError").innerText = "Password is not valid"
    } else {
        document.getElementById("passwordError").innerText = ""
    }
}

function ValidateEmail(mail) {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    
    return (false)
}

function ValidateUsername(username) {
    return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(username);
}

function ValidatePassword(password) {
    let password1 = /^(?=.*\d)(?=.*[A-Z])(?=.*\W)(?!.*\s).{8,}$/;
    return password1.test(password)
}

#####

const registerButton = document.getElementById("registerButton");

let data = [];
// localStorage.clear();
