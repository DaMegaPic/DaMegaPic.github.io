const drawButton = document.getElementById("drawLadder");
const moveButton = document.getElementById("moveStickman");
const ladder = document.getElementById("ladder");
const stickman = document.getElementById("stickman");

let currentStep = 0;
const totalSteps = 5;
const stepHeight = 60;
let climbingInterval = null;
const stickmanImages = ["images/right.png", "images/left.png"];
let currentImageIndex = 0;

drawButton.addEventListener("click", () => {
    drawLadder();
    placeStickman();
});

moveButton.addEventListener("click", startClimbing);

function drawLadder() {
    ladder.style.display = "block";
    ladder.innerHTML = "";

    for (let i = 0; i <= totalSteps+3; i++) {
        let rung = document.createElement("div");
        rung.classList.add("rung");
        rung.style.bottom = i * stepHeight + "px";
        ladder.appendChild(rung);
    }
    ladder.appendChild(stickman);
}

function placeStickman() {
    stickman.style.display = "block";
    stickman.style.bottom = "0px";
    currentStep = 0;
}

function startClimbing() {
    if (climbingInterval) return;

    climbingInterval = setInterval(() => {
        if (currentStep < totalSteps+3) {
            currentStep++;
            stickman.style.bottom = currentStep * stepHeight + "px";
            currentImageIndex = 1 - currentImageIndex;
            stickman.src = stickmanImages[currentImageIndex];
        }
        else {
            clearInterval(climbingInterval);
            climbingInterval = null;
        }
    }, 500);
}