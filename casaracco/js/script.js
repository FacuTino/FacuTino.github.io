// ===== MENÚ MÓVIL =====
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.menu');
  
    if (mobileMenuBtn && menu) {
      mobileMenuBtn.addEventListener('click', function () {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        menu.classList.toggle('active');
      });
    }
  });
  
  // ===== SLIDER PRINCIPAL =====
  window.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    let currentSlide = 0;
  
    if (slides.length > 0) {
      slides[currentSlide].classList.add('active');
  
      function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
      }
  
      if (leftArrow) {
        leftArrow.addEventListener('click', () => {
          showSlide(currentSlide - 1);
        });
      }
  
      if (rightArrow) {
        rightArrow.addEventListener('click', () => {
          showSlide(currentSlide + 1);
        });
      }
  
      setInterval(() => {
        showSlide(currentSlide + 1);
      }, 5000);
    }
  });
  
  // ===== GALERÍA =====
  window.addEventListener('DOMContentLoaded', () => {
    const gallerySlides = document.querySelectorAll('.gallery-slide');
    const galleryArrowLeft = document.querySelector('.gallery-arrow-left');
    const galleryArrowRight = document.querySelector('.gallery-arrow-right');
    let currentGallerySlide = 0;
  
    if (gallerySlides.length > 0) {
      gallerySlides[currentGallerySlide].classList.add('active');
  
      function showGallerySlide(index) {
        gallerySlides[currentGallerySlide].classList.remove('active');
        currentGallerySlide = (index + gallerySlides.length) % gallerySlides.length;
        gallerySlides[currentGallerySlide].classList.add('active');
      }
  
      if (galleryArrowLeft) {
        galleryArrowLeft.addEventListener('click', () => {
          showGallerySlide(currentGallerySlide - 1);
        });
      }
  
      if (galleryArrowRight) {
        galleryArrowRight.addEventListener('click', () => {
          showGallerySlide(currentGallerySlide + 1);
        });
      }
  
      setInterval(() => {
        showGallerySlide(currentGallerySlide + 1);
      }, 5000);
    }
  });
  
  // ===== SCROLL SUAVE =====
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });
  
  // ===== LOADER =====
  window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const whatsapp = document.querySelector('.whatsapp-container');
  
    setTimeout(() => {
      if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 600);
      }
      if (whatsapp) {
        whatsapp.style.opacity = '1';
      }
    }, 1000);
  });
  