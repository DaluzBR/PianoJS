const pianoKeys = document.querySelectorAll(".piano-keys .key");

let mapedKeys = [];

let audio = new Audio("src/audio/a.wav");

const playTune = (key) => {
    audio.src = `src/audio/${key}.wav`;
    audio.play()

    const clickedKey = document.querySelector(`[data-key="${key}"]`);

    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};


const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));

    mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)) { playTune(e.key); }
});

const handlerVolume = (e) => {
    audio.volume = e.target.value;
}

volumeSlider.addEventListener("input", handlerVolume);

const showHidekeys = ()=>{
    pianoKeys.forEach(key=> key.classList.toggle("hide"));
}

keysCheck.addEventListener("click", showHidekeys);
