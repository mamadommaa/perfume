const tie = document.querySelector('.tie');
const preview = document.querySelector('.preview');
const block = document.querySelector('.something-block');
const video = document.querySelector('video');

tie.addEventListener('click', () => {
  setTimeout(() => {
    preview.style.display = 'none';
    block.style.display = 'block';

    video.play();
  }, 600);
});

