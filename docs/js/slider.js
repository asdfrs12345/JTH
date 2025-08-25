document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let index = 0;
  let timer;

  const today = new Date().getDay();
  const isWeekend = today === 0 || today === 6;
  index = isWeekend ? 1 : 0;

  function showSlide(i) {
    index = i;
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === index);
    });
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });
    clearTimeout(timer);
    timer = setTimeout(() => {
      showSlide((index + 1) % slides.length);
    }, index === 2 ? 20000 : 8000); // Donate card stays longer
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      showSlide(+dot.dataset.index);
    });
  });

  showSlide(index);
});
