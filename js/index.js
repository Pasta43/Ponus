var el = document.getElementById("login");
el.addEventListener("click", goLogin, false);

function goLogin(){
    window.location.assign("login.html");
}