function onSubmit() {
    const username = document.getElementById('username')
    const password = document.getElementById('password')

    console.log("submit");
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

function ValidateUsername(username) {
    return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(username);
}

function ValidatePassword(password) {
    let password1 = /^(?=.*\d)(?=.*[A-Z])(?=.*\W)(?!.*\s).{8,}$/;
    return password1.test(password)
}