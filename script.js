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