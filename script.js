const tie = document.querySelector('.tie');
const ripple = document.querySelector('.ripple');
const body = document.body;
const video = document.getElementById('bgVideo');
const videoWrapper = document.querySelector('.video-wrapper');
const whiteOverlay = document.querySelector('.white-overlay');

let pulled = false;

tie.addEventListener('click', () => {
  if (pulled) return;
  pulled = true;

  tie.classList.add('tie_pull');

  setTimeout(() => {
    ripple.classList.add('ripple_active');
  }, 400);

  setTimeout(() => {
    body.classList.add('white');
  }, 900);

  setTimeout(() => {
    videoWrapper.classList.add('visible');
    playVideoLoop();
  }, 1000);

  setTimeout(() => {
    whiteOverlay.classList.add('visible');
  }, 1200);
});

function playVideoLoop() {
  video.playbackRate = 2;
  video.play();

  let forward = true;

  function checkLoop() {
    if (forward && video.currentTime >= video.duration - 0.2) {
      forward = false;
      video.playbackRate = -2;
      video.play();
    }

    if (!forward && video.currentTime <= 0.2) {
      forward = true;
      video.playbackRate = 2;
      video.play();
    }

    requestAnimationFrame(checkLoop);
  }

  requestAnimationFrame(checkLoop);
}
