window.onload = () => {
    let engine = new Engine($GODOT_CONFIG);
    engine.startGame({ onProgress: updateProgress });
}

let overlay = document.querySelector(".overlay");
let loadingBar = document.querySelector(".loading-bar");
let loadingText = document.querySelector(".loading-text");

let updateProgress = (cur, total) => {
    console.log("Loaded " + cur + " of " + total);

    if (total === 0) {
        return;
    }

    loadingText.classList.remove("blink");

    loadingText.innerText = "LOADING (" + Math.round(cur / total * 100) + "%)";

    loadingBar.style.transform = "scaleX(" + (cur / total) + ")";

    if (cur === total) {
        overlay.classList.add("hide");
    }
}