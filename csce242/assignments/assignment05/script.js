//Hello click
document.getElementById("hello-click").onclick = () => {
    const newHello = document.createElement("div");
    newHello.textContent = "Hello";
    document.getElementById("container").appendChild(newHello);
}
//Star color change
document.getElementById("color-picker").oninput = () => {
    document.getElementById("star").style.color = document.getElementById("color-picker").value;
}
//Image change
document.getElementById("image-click").onclick = () => {
    const img = document.getElementById("image-click");
    if(img.src.includes("https://placehold.co/200x200")){
        img.src = "https://placehold.co/250x250";
    }
    else{
        img.src = "https://placehold.co/200x200";
    }
}
function getRandomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}