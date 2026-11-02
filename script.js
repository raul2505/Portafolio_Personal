// Progressive enhancement: project content remains visible without JavaScript.
(() => {
  const cards = document.querySelectorAll('.case-featured');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!('IntersectionObserver' in window) || reducedMotion || !cards.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });
  cards.forEach((card) => observer.observe(card));
})();
