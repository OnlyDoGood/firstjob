document.addEventListener('DOMContentLoaded', function() {
  // Background image rotation
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
    if (section) {
      section.style.backgroundImage = images[current];
      section.style.backgroundSize = "cover";
      section.style.backgroundPosition = "center";
      current = (current + 1) % images.length;
    }
  }
  changeBackground();
  setInterval(changeBackground, 5000);

  // Hamburger menu and overlay
  const hamburger = document.getElementById('hamburger-menu');
  const navOverlay = document.getElementById('nav-overlay');
  const navClose = document.getElementById('nav-close');
  const menuIcon = hamburger?.querySelector('.menu-icon');
  const closeIcon = hamburger?.querySelector('.close-icon');
  const links = document.querySelector('.links');
  const rightSide = document.querySelector('.right-side');

  if (hamburger && navOverlay && navClose) {
    hamburger.addEventListener('click', function() {
      navOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (menuIcon && closeIcon) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
      }
    });

    navClose.addEventListener('click', function() {
      navOverlay.classList.remove('active');
      document.body.style.overflow = '';
      if (menuIcon && closeIcon) {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    });

    navOverlay.querySelectorAll('.nav-link, .login-btn, .member-btn, .products-list a').forEach(function(el) {
      el.addEventListener('click', function() {
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
        if (menuIcon && closeIcon) {
          menuIcon.style.display = 'block';
          closeIcon.style.display = 'none';
        }
      });
    });
  }

  // Hamburger for desktop nav (if used)
  if (hamburger && links && rightSide && menuIcon && closeIcon) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('is-active');
      links.classList.toggle('show-nav');
      rightSide.classList.toggle('show-nav');
      if (hamburger.classList.contains('is-active')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
      } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    });
  }

  // --- Payment Popup ---
  const paymentPopup = document.getElementById('payment-popup');
  const closePopupBtn = document.getElementById('close-payment-popup');
  const planTitle = document.getElementById('payment-plan-title');
  const paymentForm = document.getElementById('payment-form');

  if (paymentPopup && closePopupBtn && planTitle && paymentForm) {
    document.querySelectorAll('.btn-price-modern').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        if (
          btn.classList.contains('free-btn') ||
          btn.classList.contains('standard-btn') ||
          btn.classList.contains('premium-btn')
        ) {
          e.preventDefault();
          let plan = 'Payment Plan';
          if (btn.classList.contains('free-btn')) plan = 'Free Plan';
          if (btn.classList.contains('standard-btn')) plan = 'Standard Plan';
          if (btn.classList.contains('premium-btn')) plan = 'Premium Plan';
          planTitle.textContent = plan;
          paymentPopup.style.display = 'flex';
        }
      });
    });

    closePopupBtn.addEventListener('click', function() {
      paymentPopup.style.display = 'none';
    });

    paymentPopup.addEventListener('click', function(e) {
      if (e.target === paymentPopup) paymentPopup.style.display = 'none';
    });

    paymentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Payment processed! (Demo)');
      paymentPopup.style.display = 'none';
    });
  }

  // Style payment popup from JS to avoid CSS conflicts
  function stylePaymentPopup() {
    const popup = document.querySelector('.payment-popup-overlay');
    const content = document.querySelector('.payment-popup-content');
    if (popup && content) {
      Object.assign(popup.style, {
        position: 'fixed',
        top: '0', left: '0', right: '0', bottom: '0',
        background: 'rgba(0,0,0,0.5)',
        zIndex: '9999',
        display: 'none',
        alignItems: 'center',
        justifyContent: 'center'
      });
      Object.assign(content.style, {
        background: '#fff',
        padding: '32px 24px',
        borderRadius: '16px',
        maxWidth: '400px',
        width: '90vw',
        position: 'relative',
        boxShadow: '0 8px 32px rgba(35,166,240,0.18)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '18px'
      });
      const closeBtn = document.getElementById('close-payment-popup');
      if (closeBtn) {
        Object.assign(closeBtn.style, {
          position: 'absolute',
          top: '14px',
          right: '18px',
          fontSize: '2rem',
          color: '#222',
          cursor: 'pointer'
        });
      }
      const planTitle = document.getElementById('payment-plan-title');
      if (planTitle) {
        Object.assign(planTitle.style, {
          fontSize: '1.4rem',
          marginBottom: '12px',
          color: '#23a6f0',
          fontWeight: 'bold'
        });
      }
      const form = document.getElementById('payment-form');
      if (form) {
        Object.assign(form.style, {
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          marginTop: '10px'
        });
        Array.from(form.querySelectorAll('label')).forEach(label => {
          Object.assign(label.style, {
            fontSize: '1rem',
            color: '#222',
            marginBottom: '4px',
            textAlign: 'left',
            display: 'block'
          });
        });
        Array.from(form.querySelectorAll('input, select')).forEach(input => {
          Object.assign(input.style, {
            padding: '10px 12px',
            borderRadius: '8px',
            border: '1px solid #23a6f0',
            fontSize: '1rem',
            marginBottom: '6px'
          });
        });
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
          Object.assign(submitBtn.style, {
            background: 'linear-gradient(90deg, #23a6f0 0%, #b00cf4 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 0',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(35,166,240,0.10)',
            transition: 'background 0.2s, color 0.2s, transform 0.2s'
          });
          submitBtn.onmouseover = function() {
            submitBtn.style.background = 'linear-gradient(90deg, #b00cf4 0%, #23a6f0 100%)';
            submitBtn.style.transform = 'translateY(-2px) scale(1.03)';
          };
          submitBtn.onmouseout = function() {
            submitBtn.style.background = 'linear-gradient(90deg, #23a6f0 0%, #b00cf4 100%)';
            submitBtn.style.transform = '';
          };
        }
      }
    }
  }

  // Call this after DOM is ready
  document.addEventListener('DOMContentLoaded', stylePaymentPopup);

  // --- Insurance Deals Popup ---
  function showDealsPopup(title, deals) {
    let popup = document.getElementById('deals-popup');
    if (!popup) {
      popup = document.createElement('div');
      popup.id = 'deals-popup';
      popup.className = 'deals-popup-overlay';
      popup.innerHTML = `
        <div class="deals-popup-content">
          <span class="deals-popup-close" id="close-deals-popup">&times;</span>
          <h2 id="deals-title"></h2>
          <ul id="deals-list"></ul>
        </div>
      `;
      document.body.appendChild(popup);
    }
    document.getElementById('deals-title').textContent = title + ' Deals';
    const dealsList = document.getElementById('deals-list');
    dealsList.innerHTML = deals.map(deal => `<li>${deal}</li>`).join('');
    popup.style.display = 'flex';

    document.getElementById('close-deals-popup').onclick = function() {
      popup.style.display = 'none';
    };
    popup.onclick = function(e) {
      if (e.target === popup) popup.style.display = 'none';
    };
  }

  // Dummy deals data
  const dealsData = {
    Home: [
      "Save 20% on new home insurance policies!",
      "Bundle home & auto for extra discounts.",
      "Free home security consultation with every plan."
    ],
    Health: [
      "Get 2 months free on annual health plans.",
      "Family health coverage starting at $29/month.",
      "Telemedicine included at no extra cost."
    ],
    Auto: [
      "Zero deductible for first claim!",
      "Multi-car discount up to 25%.",
      "Roadside assistance included."
    ],
    Life: [
      "Guaranteed acceptance for life insurance.",
      "No medical exam required for select plans.",
      "Free financial planning session."
    ]
  };

  // Attach click listeners to nav and dropdown links
  document.querySelectorAll('.nav-link, .products-list a').forEach(function(link) {
    const text = link.textContent.toLowerCase();
    if (text.includes('home')) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        showDealsPopup('Home Insurance', dealsData.Home);
      });
    }
    if (text.includes('health')) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        showDealsPopup('Health Insurance', dealsData.Health);
      });
    }
    if (text.includes('auto')) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        showDealsPopup('Auto Insurance', dealsData.Auto);
      });
    }
    if (text.includes('life')) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        showDealsPopup('Life Insurance', dealsData.Life);
      });
    }
  });

  // Option items (if you have them)
  document.querySelectorAll('.option-item').forEach(function(item) {
    const title = item.querySelector('h3')?.textContent;
    if (title && dealsData[title.split(' ')[0]]) {
      item.onclick = function() {
        showDealsPopup(title, dealsData[title.split(' ')[0]]);
      };
    }
  });
});
