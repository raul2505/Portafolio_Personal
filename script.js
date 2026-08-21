
  // Scroll-reveal for project cards
  const cards = document.querySelectorAll('.case-card');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  cards.forEach(c=>io.observe(c));
