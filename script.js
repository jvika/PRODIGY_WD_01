const nav = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.backgroundColor = 'black';
  } else {
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  }
});