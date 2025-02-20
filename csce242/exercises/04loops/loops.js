document.getElementById("btn-display").onclick = () => {
    const startNum = parseInt(document.getElementById("txt-start").value);
    const endNum = parseInt(document.getElementById("txt-end").value);
    const displayArea = document.getElementById("start-end-display");
    displayArea.innerHTML = "";
    const errorDisplay = document.getElementById("error-num-order");
    errorDisplay.innerHTML = "";    //clear out any previous errors
    const favMessageP = document.getElementById("fav-message");
    favMessageP.innerHTML = "";

    if(endNum < startNum) {
        errorDisplay.innerHTML = `${endNum} is less than ${startNum}.`
        return; //don't do anything else if you already have an error
    }

    for(let i=startNum; i <= endNum; i++){
        const li = document.createElement("li");
        li.innerHTML = i;
        displayArea.append(li);
        //attach event to onclick li
        li.onclick = () => {
            favMessageP.innerHTML = `You clicked ${i}.`
        }
    }
}

let count = 0;
let updateCount;

document.getElementById("btn-count").onclick = (event) => {

    //start count
    if (event.currentTarget.innerHTML == "Start") {
        event.currentTarget.innerHTML = "Stop";

        updateCount = setInterval(()=>{
            count++;
            document.getElementById("count-display").innerHTML = count;
        },1);
    }
    //stop count
    else if (event.currentTarget.innerHTML == "Stop") {
        event.currentTarget.innerHTML = "Start";

        clearInterval(updateCount);
    }
}
document.getElementById("btn-reset").onclick = () => {
    clearInterval(updateCount);
    count = 0;
    document.getElementById("count-display").innerHTML = "";
    document.getElementById("btn-count").innerHTML = "Start";
}