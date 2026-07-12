const tie = document.querySelector('.tie');
const ripple = document.querySelector('.ripple');
const body = document.body;
const video = document.getElementById('bgVideo');
const videoWrapper = document.querySelector('.video-wrapper');
const mainContainer = document.querySelector('.main-container');

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
    mainContainer.classList.add('visible');
  }, 1200);
});

function playVideoLoop() {
  video.playbackRate = 1;
  video.play();

  function onVideoEnd() {
    video.currentTime = 0;
    video.play();
  }

  video.addEventListener('ended', onVideoEnd);
}
