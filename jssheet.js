function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing")
}

function playSound(event) {
  const AUDIO = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const KEY = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if (!AUDIO) return;

  KEY.classList.add("playing");
  AUDIO.currentTime = 0;
  AUDIO.play();
}

const keys = Array.from(document.getElementsByClassName('key'));
console.log(keys);
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound);
