document.addEventListener("DOMContentLoaded", () => {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const dots   = Array.from(document.querySelectorAll(".dot"));
  let   current;

  // Pick today’s slide: 0=Weekday, 1=Weekend, 2=Donate
  const today = new Date().getDay(); // 0=Sun … 6=Sat
  if      (today >= 1 && today <= 5) current = 0;
  else if (today === 6 || today === 0) current = 1;
  else                                 current = 2;

  function show(i) {
    slides.forEach((s, idx) => s.style.display = idx === i ? "block" : "none");
    dots.forEach((d, idx)   => d.classList.toggle("active", idx === i));
  }

  // Dot click handlers
  dots.forEach((dot, idx) =>
    dot.addEventListener("click", () => {
      current = idx;
      show(current);
    })
  );

  // Initial render
  show(current);

  // Auto-cycle every 12 seconds (was 8s)
  setInterval(() => {
    current = (current + 1) % slides.length;
    show(current);
  }, 12000);
});
