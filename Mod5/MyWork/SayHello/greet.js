"use strict"

function greetUser() {
    const userName = document.getElementById("name");
    alert("Hello " + userName.value);
}

window.onload = function() {
    helloBtn.onclick = greetUser;
}