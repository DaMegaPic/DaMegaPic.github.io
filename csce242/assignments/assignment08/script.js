const showList = () => {
    const resultDiv = document.getElementById("result");
    const ulElem = document.createElement("ul");
    resultDiv.append(ulElem);
    const items = {"Happy Birthday": "images/birthday.jpg","Crazy Clown": "images/clown.jpg", "It's Raining": "images/rain.jpg", "Quiet Time": "images/read.jpg", "Working Hard": "images/shovel.jpg", "Working from Home": "images/work.jpg"};

    for(let title in items){
        const liElem = document.createElement("li");
        liElem.textContent = title;
        liElem.addEventListener("click", () => showPopup(title, items[title]));
        ulElem.append(liElem);
    }
}

const showPopup = (title, imgSrc) => {
    document.getElementById("popupTitle").textContent = title;
    document.getElementById("popupImage").src = imgSrc;
    document.getElementById("popup").classList.remove("hidden");
}

document.getElementById("closePopup").addEventListener("click", () => {
    document.getElementById("popup").classList.add("hidden");
})

window.onload = () => {
    showList();
}