import "./index.scss";

const summerButton = document.getElementById("summer-button");
const rainButton = document.getElementById("rain-button");
const winterButton = document.getElementById("winter-button");
const volumeControl = document.getElementById("volume");

let currentSound = null;

function playSound(sound) {
  if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0;
  }
  currentSound = sound;
  sound.play();
}

function stopSound() {
  if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0;
  }
}

summerButton.addEventListener("click", () => {
  if (currentSound && currentSound.src.includes("summer.mp3")) {
    stopSound();
    currentSound = null;
  } else {
    const summerSound = new Audio("./assets/sounds/summer.mp3");
    summerSound.loop = true;
    summerSound.volume = volumeControl.value;
    playSound(summerSound);
    document.body.style.backgroundImage =
      "url('./assets/images/summer-bg.jpg')";
  }
});

rainButton.addEventListener("click", () => {
  if (currentSound && currentSound.src.includes("rain.mp3")) {
    stopSound();
    currentSound = null;
  } else {
    const rainSound = new Audio("./assets/sounds/rain.mp3");
    rainSound.loop = true;
    rainSound.volume = volumeControl.value;
    playSound(rainSound);
    document.body.style.backgroundImage = "url(./assets/images/rainy-bg.jpg)";
  }
});

winterButton.addEventListener("click", () => {
  if (currentSound && currentSound.src.includes("winter.mp3")) {
    stopSound();
    currentSound = null;
  } else {
    const winterSound = new Audio("./assets/sounds/winter.mp3");
    winterSound.loop = true;
    winterSound.volume = volumeControl.value;
    playSound(winterSound);
    document.body.style.backgroundImage = "url(./assets/images/winter-bg.jpg)";
  }
});

volumeControl.addEventListener("input", () => {
  if (currentSound) {
    currentSound.volume = volumeControl.value;
  }
});
