/**
 * Yogesh - Developer Portfolio Script
 * Controls interactive features: Theme Toggle, Mobile Menu, Active Scroll Highlighting,
 * Project Filtering, Scroll Reveal Animations, and Contact Form Feedback.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initActiveNavScroll();
  initProjectFilters();
  initScrollReveal();
  initContactForm();
  initFooterYear();
});

/* ==========================================================================
   THEME TOGGLE (DARK / LIGHT MODE)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // Retrieve theme preference from localStorage, default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  htmlElement.setAttribute('data-theme', savedTheme);

  // Toggle button click handler
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Set theme attribute and update localStorage
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

/* ==========================================================================
   MOBILE MENU TOGGLE
   ========================================================================== */
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');
  const header = document.querySelector('.header');
  const navLinks = document.querySelectorAll('.nav-link');

  // Open/Close menu handler
  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    header.classList.toggle('menu-open', isOpen);
    mobileMenuBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      header.classList.remove('menu-open');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ==========================================================================
   ACTIVE NAV LINK HIGHLIGHT ON SCROLL
   ========================================================================== */
function initActiveNavScroll() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px', // Focus window in middle section of screen
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Remove active class from all links, add to current
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });
}

/* ==========================================================================
   PROJECT FILTERING SYSTEM
   ========================================================================== */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle button active state
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });
}

/* ==========================================================================
   SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.scroll-reveal');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px', // Trigger slightly before element enters
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Once revealed, we don't need to observe it again
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });
}

/* ==========================================================================
   CONTACT FORM SUBMISSION HANDLER (MOCK FEEDBACK)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedbackBlock = document.getElementById('form-feedback');
  
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop page reload

    const submitBtn = form.querySelector('.btn-submit');
    const submitBtnText = submitBtn.querySelector('span');
    const submitBtnIcon = submitBtn.querySelector('.send-icon');

    // Get input values
    const nameVal = document.getElementById('name').value;
    const emailVal = document.getElementById('email').value;
    const messageVal = document.getElementById('message').value;

    // Simulate loading state
    submitBtn.disabled = true;
    if (submitBtnText) submitBtnText.textContent = 'Sending Message...';
    if (submitBtnIcon) submitBtnIcon.style.opacity = '0.5';

    // Send using FormSubmit AJAX
    fetch('https://formsubmit.co/ajax/kerelene.help@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: nameVal,
        email: emailVal,
        message: messageVal,
        _subject: 'New Portfolio Message from ' + nameVal
      })
    })
    .then(response => {
      if (response.ok) {
        // Hide the form with a fade transition
        form.style.opacity = '0';
        setTimeout(() => {
          form.classList.add('hidden');
          feedbackBlock.classList.remove('hidden');
        }, 300);
      } else {
        alert('Something went wrong. Please try again.');
        submitBtn.disabled = false;
        if (submitBtnText) submitBtnText.textContent = 'Send Message';
        if (submitBtnIcon) submitBtnIcon.style.opacity = '1';
      }
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      alert('Network error. Please try again.');
      submitBtn.disabled = false;
      if (submitBtnText) submitBtnText.textContent = 'Send Message';
      if (submitBtnIcon) submitBtnIcon.style.opacity = '1';
    });
  });
}

/* ==========================================================================
   DYNAMIC FOOTER YEAR
   ========================================================================== */
function initFooterYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
