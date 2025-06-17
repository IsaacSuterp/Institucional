// Reveal Sections on Scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('.section-reveal');
  const options = { threshold: 0.15 };
  const reveal = (entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(reveal, options);
  sections.forEach(section => observer.observe(section));
});

// Animar Testimonials Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
if(testimonials.length > 0) {
  setInterval(() => {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].classList.add('active');
  }, 4300);
}

// Mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  menu.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Destacar o link ativo automaticamente no menu
  const links = document.querySelectorAll('.nav-links a');
  const url = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    if(link.getAttribute('href') === url) {
      link.classList.add('active');
    }
  });
});
