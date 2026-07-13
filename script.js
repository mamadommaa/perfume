const tie = document.querySelector('.tie');
const preview = document.querySelector('.preview');
const block = document.querySelector('.something-block');
const video = document.querySelector('video');

// добавляем музычку
const audio = document.querySelector('.audio');
const btn = document.querySelector('.header__music');

tie.addEventListener('click', () => {
  setTimeout(() => {
    preview.style.display = 'none';
    block.style.display = 'block';

    block.classList.add('show');

    video.play();

    audio.currentTime = 18;
    audio.play();
  }, 600);
});

btn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  btn.classList.toggle('muted');
});

