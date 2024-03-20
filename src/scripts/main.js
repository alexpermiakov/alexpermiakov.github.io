let header = document.querySelector('header');
let isScrolled = false;

window.addEventListener('scroll', function() {
  if (isScrolled) {
    return;
  }

  window.requestAnimationFrame(function() {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    isScrolled = false;
  });

  isScrolled = true;
});