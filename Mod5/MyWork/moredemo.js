"use strict"

function sayHello() {
    alert("Hello!")
}

window.onload = function() {
    const btn = document.getElementById("helloBtn");
    btn.onclick = sayHello;
}