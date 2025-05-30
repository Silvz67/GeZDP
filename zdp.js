const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const pauseBtn = document.getElementById('pauseBtn');

let index = 0;
let isPaused = false;
let interval;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove('active');
    dots[idx].classList.remove('active');
  });

  slides[i].classList.add('active');
  dots[i].classList.add('active');
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function startAutoSlide() {
  interval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
  clearInterval(interval);
}

pauseBtn.addEventListener('click', () => {
  isPaused = !isPaused;
  if (isPaused) {
    stopAutoSlide();
    pauseBtn.textContent = '▶️';
  } else {
    startAutoSlide();
    pauseBtn.textContent = '⏸️';
  }
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    showSlide(index);
  });
});

showSlide(index);
startAutoSlide();
