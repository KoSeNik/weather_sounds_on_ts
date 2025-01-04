import "./index.scss";

type SoundTheme = "summer" | "rain" | "winter";

const buttons: Record<SoundTheme, HTMLButtonElement | null> = {
  summer: document.getElementById("summer-button") as HTMLButtonElement | null,
  rain: document.getElementById("rain-button") as HTMLButtonElement | null,
  winter: document.getElementById("winter-button") as HTMLButtonElement | null,
};

const volumeControl: HTMLInputElement | null = document.getElementById("volume") as HTMLInputElement | null;

let currentSound: HTMLAudioElement | null = null;
let currentTheme: SoundTheme | null = null;

const soundPaths: Record<SoundTheme, string> = {
  summer: "./assets/sounds/summer.mp3",
  rain: "./assets/sounds/rain.mp3",
  winter: "./assets/sounds/winter.mp3",
};

const backgroundImages: Record<SoundTheme, string> = {
  summer: "url('./assets/images/summer-bg.jpg')",
  rain: "url('./assets/images/rainy-bg.jpg')",
  winter: "url('./assets/images/winter-bg.jpg')",
};

function createAndPlaySound(theme: SoundTheme): void {
  const sound = new Audio(soundPaths[theme]);
  sound.loop = true;
  sound.volume = volumeControl?.valueAsNumber || 0;
  playSound(sound, theme);
  document.body.style.backgroundImage = backgroundImages[theme];
}

function playSound(sound: HTMLAudioElement, theme: SoundTheme): void {
  stopSound();
  currentSound = sound;
  currentTheme = theme;
  sound.play();
}

function stopSound(): void {
  if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0;
    currentSound = null;
    currentTheme = null;
  }
}

function handleButtonClick(theme: SoundTheme): void {
  if (currentTheme === theme) {
    stopSound();
    document.body.style.backgroundImage = "";
  } else {
    createAndPlaySound(theme);
  }
}

Object.entries(buttons).forEach(([theme, button]) => {
  if (button) {
    button.addEventListener("click", () => handleButtonClick(theme as SoundTheme));
  }
});

volumeControl?.addEventListener("input", () => {
  if (currentSound) {
    currentSound.volume = volumeControl.valueAsNumber || 0;
  }
});
