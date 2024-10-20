const inputBox = document.getElementById("enter-task");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === '') {
        alert("Can't add empty text!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        // Append task - latest entry at the top 
        if (listContainer.firstElementChild) {
            listContainer.insertBefore(li, listContainer.firstElementChild);
        } else {
            listContainer.appendChild(li); // append normally if list is empty
        }
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

inputBox.addEventListener("keypress", function(event) {
    // if the user presses enter key
    if (event.key === "Enter") {
        document.getElementById("add-button").click();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

// Audio Sliders //
const rainSlider = document.getElementById("rain-slider");
const rainAudio = document.getElementById("rain-audio");
const fireSlider = document.getElementById("fire-slider");
const fireAudio = document.getElementById("fire-audio");
const oceanAudio = document.getElementById("ocean-audio");
const oceanSlider = document.getElementById("ocean-slider");
const birdsAudio = document.getElementById("birds-audio");
const birdsSlider = document.getElementById("birds-slider");

rainSlider.addEventListener('input', function() {
    rainAudio.volume = rainSlider.value;
    if (rainSlider.value > 0) {
        rainAudio.play();
    } else {
        rainAudio.pause();
    }
});

fireSlider.addEventListener('input', function() {
    fireAudio.volume = fireSlider.value;
    if (fireSlider.value > 0) {
        fireAudio.play();
    } else {
        fireAudio.pause();
    }
});

oceanSlider.addEventListener('input', function() {
    oceanAudio.volume = oceanSlider.value;
    if (oceanSlider.value > 0) {
        oceanAudio.play();
    } else {
        oceanAudio.pause();
    }
});

birdsSlider.addEventListener('input', function() {
    birdsAudio.volume = birdsSlider.value;
    if (birdsSlider.value > 0) {
        birdsAudio.play();
    } else {
        birdsAudio.pause();
    }
});