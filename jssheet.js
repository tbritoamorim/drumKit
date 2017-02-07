var key;
function playSound(event) {
  const AUDIO = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  console.log(key);
  if (!AUDIO) { return }
  AUDIO.currentTime = 0;
  AUDIO.play();
  addClass(key);
}
function addClass(x) {
  x.classList.add('playing');
}
function removeClass(x) {
  key.classList.remove('playing');
}

window.addEventListener('keydown', playSound, removeClass);
