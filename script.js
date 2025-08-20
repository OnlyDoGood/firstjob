const images = [
    'url("assets/happy-black-parents-with-kids-making-video-call-smart-phone-home.jpg")',
    'url("assets/man-boxes.jpg")',
    'url("assets/doctor-filling-up-life-insurance-form.jpg")',
    'url("assets/family-showcasing-their-home.jpg")',
    'url("assets/protect-your-house.jpg")',
    'url("assets/portrait-diverse-women-together.jpg")'
  ];

  let current = 0;
  const section = document.getElementById("header-main-section");

  function changeBackground() {
    section.style.backgroundImage = images[current];
    section.style.backgroundSize = "cover";
    section.style.backgroundPosition = "center";
    current = (current + 1) % images.length;
  }

  changeBackground();
  setInterval(changeBackground, 5000);

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger-menu');
  const navOverlay = document.getElementById('nav-overlay');
  const navClose = document.getElementById('nav-close');

  // Open menu
  hamburger.addEventListener('click', function() {
    navOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  // Close menu
  navClose.addEventListener('click', function() {
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Close menu when any nav link or button is clicked
  navOverlay.querySelectorAll('.nav-link, .login-btn, .member-btn, .products-list a').forEach(function(el) {
    el.addEventListener('click', function() {
      navOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
});
