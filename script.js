let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function showNextImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalImages;
  images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000);

document.addEventListener('DOMContentLoaded', function () {
  const audioContainer = document.getElementById('audio-container');

  const audioElement = document.createElement('audio');
  audioElement.controls = true;

  const sourceElement = document.createElement('source');
  sourceElement.src = 'audio/hino.mp3';
  sourceElement.type = 'audio/mpeg';

  audioElement.appendChild(sourceElement);
  audioContainer.appendChild(audioElement);
});