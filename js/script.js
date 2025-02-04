// Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Explore Button Scroll
const exploreBtn = document.getElementById('explore-btn');
exploreBtn.addEventListener('click', () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth'
  });
});

// Light/Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Scroll Animation
const cards = document.querySelectorAll('.service-card, .opinion-card');
window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight * 0.8) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
});


// Parallax Effect
window.addEventListener('scroll', () => {
  const parallaxBg = document.querySelector('.parallax-bg');
  const scrollPosition = window.pageYOffset;

  // Adjust the background position on scroll
  parallaxBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});
