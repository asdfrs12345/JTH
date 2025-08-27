document.addEventListener("DOMContentLoaded", () => {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const dots   = Array.from(document.querySelectorAll(".dot"));
  
  // 1. Determine starting index by day-of-week
  const today = new Date().getDay(); // 0=Sun,1=Mon…6=Sat
  let current;
  if (today >= 1 && today <= 5)       current = 0; // Weekday
  else if (today === 6 || today === 0) current = 1; // Weekend
  else                                 current = 2; // Donate as fallback
  
  // 2. Show function
  function show(i) {
    slides.forEach((slide, idx) => {
      slide.style.display = idx === i ? "block" : "none";
    });
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === i);
    });
  }
  
  // 3. Dot click handlers
  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      current = idx;
      show(current);
    });
  });
  
  // 4. Initial render
  show(current);
  
  // 5. Auto-cycle every 8s
  setInterval(() => {
    current = (current + 1) % slides.length;
    show(current);
  }, 8000);
});
