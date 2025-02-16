/* Nav */
document.getElementById("exercise-1").onclick = () => {
    document.getElementById("exercise1-content").classList.remove("hidden");
    document.getElementById("exercise2-content").classList.add("hidden");
}
document.getElementById("exercise-2").onclick = () => {
    document.getElementById("exercise2-content").classList.remove("hidden");
    document.getElementById("exercise1-content").classList.add("hidden");
}
document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("nav").classList.toggle("hide-small");
    const arrowElement = document.getElementById("arrow");
    if (arrowElement.textContent == "▼") {
        arrowElement.textContent = "▲";
    } else {
        arrowElement.textContent = "▼";
    }
}
/* Travelling */
document.getElementById("transportation").onkeyup = () => {
    const vehicle = document.getElementById("transportation").value;
    if (vehicle == "bike") {
        document.getElementById("transportation-img").src = "images/bike.jfif";
    }
    else if (vehicle == "car") {
        document.getElementById("transportation-img").src = "images/car.jfif";
    }
    else if (vehicle == "scooter") {
        document.getElementById("transportation-img").src = "images/scooter.jfif";
    }
    else if (vehicle == "skateboard") {
        document.getElementById("transportation-img").src = "images/skateboard.jfif";
    }
    else {
        document.getElementById("transportation-img").src = ""
    }
}
/* Heart */
function heartColor(color) {
    document.getElementById("heart").style.color = color;
}