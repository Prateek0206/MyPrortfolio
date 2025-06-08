const playPauseButton = document.querySelector(".interactive-section button");

function tooglePlay() {
  const audio = document.getElementById("audio");

  if (audio.paused) {
    audio.play();

    playPauseButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 24 24">
  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
</svg>
`;
  } else {
    audio.pause();
    playPauseButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 24 24">
  <path d="M8 5v14l11-7z"/>
</svg>
`;
  }
}
playPauseButton.addEventListener("click", () => {
  tooglePlay();
});
