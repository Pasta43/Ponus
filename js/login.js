var loginButton = document.getElementById("login");

loginButton.addEventListener("click",login);

function login(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    if (email.value==="ponus.admin@example.com" && password.value==="admin"){
        window.location.assign("dashboard.html");
    }else{
        alert("Usuario o contraseña incorrecta")
    }
}