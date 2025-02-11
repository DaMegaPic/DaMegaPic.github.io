//do stuff when button clicked
document.getElementById("btn-click-me").onclick = () => {
    console.log("WOW!");
    document.getElementById("result").innerHTML="Hi Colson";
};

//change color
document.getElementById("btn-color").onclick = () => {
    const messageP = document.getElementById("message-old");
    messageP.innerHTML = "Good bye";
    messageP.classList.toggle("sad");
}

//Column 3
document.getElementById("btn-happy").onclick = () => {
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Good Times";
    messageP.classList.remove("sad");
    messageP.classList.toggle("happy");
    document.getElementById("btn-clear").classList.remove("display-none");
}
document.getElementById("btn-sad").onclick = () => {
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Bad Times";
    messageP.classList.remove("happy")
    messageP.classList.toggle("sad");
    document.getElementById("btn-clear").classList.remove("display-none");

}
document.getElementById("btn-clear").onclick = () => {
    const messageP = document.getElementById("message");
    messageP.innerHTML = "";
    messageP.classList.remove("happy");
    messageP.classList.remove("sad");
    document.getElementById("btn-clear").classList.add("display-none");
}
document.getElementById("feeling").onkeyup = (event) => {
    document.getElementById("feeling-output").innerHTML = 
    "You are feeling " + event.currentTarget.value;
}

//toggling the nav
document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
}