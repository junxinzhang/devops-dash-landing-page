/**
 * DevOps Dashboard - Landing Page JavaScript
 */

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function() {
  // Mobile menu toggle
  const btn = document.getElementById('menu-btn');
  const nav = document.getElementById('mobile-nav');

  if (btn && nav) {
    btn.addEventListener('click', () => {
      nav.classList.toggle('active');
      const isOpen = nav.classList.contains('active');
      btn.setAttribute('aria-expanded', isOpen);
      btn.innerHTML = isOpen
        ? '<i class="ri-close-line text-xl text-white"></i>'
        : '<i class="ri-menu-line text-xl text-white"></i>';
    });

    // Close mobile menu when clicking a link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = '<i class="ri-menu-line text-xl text-white"></i>';
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!btn.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = '<i class="ri-menu-line text-xl text-white"></i>';
      }
    });
  }

  // Initialize AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Add scroll effect to header
  const header = document.querySelector('header');
  if (header) {
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      lastScrollY = currentScrollY;
    });
  }

  // Dynamic copyright year
  const copyrightEl = document.getElementById('copyright-year');
  if (copyrightEl) {
    const startYear = 2025;
    const currentYear = new Date().getFullYear();
    copyrightEl.textContent = currentYear > startYear
      ? `${startYear}-${currentYear}`
      : `${startYear}`;
  }

  // Lazy load images
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  }

  // Animate stats on scroll
  const statCards = document.querySelectorAll('.stat-card');
  if ('IntersectionObserver' in window && statCards.length > 0) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
        }
      });
    }, { threshold: 0.5 });

    statCards.forEach(card => statsObserver.observe(card));
  }

  // Handle FAQ accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const summary = item.querySelector('summary');
    if (summary) {
      summary.addEventListener('click', (e) => {
        // Optional: close other FAQs when opening one
        // faqItems.forEach(otherItem => {
        //   if (otherItem !== item && otherItem.open) {
        //     otherItem.open = false;
        //   }
        // });
      });
    }
  });

  // Track external link clicks (for analytics)
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function() {
      const href = this.getAttribute('href');
      console.log('External link clicked:', href);
      // Add your analytics tracking here
    });
  });

  // Add loading state for demo links
  const demoLinks = document.querySelectorAll('.demo-card a');
  demoLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const icon = this.querySelector('i');
      if (icon) {
        icon.className = 'ri-loader-4-line animate-spin';
        setTimeout(() => {
          icon.className = icon.dataset.originalClass || 'ri-play-fill';
        }, 500);
      }
    });
  });

  // Scroll progress indicator
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #10b981, #f7b733);
    z-index: 9999;
    transition: width 0.1s ease;
    width: 0%;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${scrollPercent}%`;
  });

  // Screenshot carousel functionality
  const carousel = document.querySelector('.screenshot-carousel');
  if (carousel) {
    const images = carousel.querySelectorAll('.carousel-image');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    const indicators = carousel.querySelectorAll('.carousel-indicator');
    let currentIndex = 0;
    let autoPlayInterval;

    function showImage(index) {
      // Remove active class from all images and indicators
      images.forEach(img => img.classList.remove('active'));
      indicators.forEach(ind => ind.classList.remove('active'));

      // Add active class to current image and indicator
      images[index].classList.add('active');
      indicators[index].classList.add('active');
      currentIndex = index;
    }

    function nextImage() {
      const nextIndex = (currentIndex + 1) % images.length;
      showImage(nextIndex);
    }

    function prevImage() {
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(prevIndex);
    }

    function startAutoPlay() {
      autoPlayInterval = setInterval(nextImage, 5000);
    }

    function stopAutoPlay() {
      clearInterval(autoPlayInterval);
    }

    // Event listeners
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevImage();
        stopAutoPlay();
        startAutoPlay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextImage();
        stopAutoPlay();
        startAutoPlay();
      });
    }

    // Indicator click handlers
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        showImage(index);
        stopAutoPlay();
        startAutoPlay();
      });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        prevImage();
        stopAutoPlay();
        startAutoPlay();
      } else if (e.key === 'ArrowRight') {
        nextImage();
        stopAutoPlay();
        startAutoPlay();
      }
    });

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const swipeThreshold = 50;
      if (touchStartX - touchEndX > swipeThreshold) {
        nextImage();
        stopAutoPlay();
        startAutoPlay();
      } else if (touchEndX - touchStartX > swipeThreshold) {
        prevImage();
        stopAutoPlay();
        startAutoPlay();
      }
    }

    // Pause auto-play when hovering over carousel
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);

    // Start auto-play on load
    startAutoPlay();
  }

  // Console welcome message
  console.log('%cDevOps Dashboard', 'color: #10b981; font-size: 20px; font-weight: bold;');
  console.log('%cCI/CD Visualization Platform', 'color: #64748b; font-size: 12px;');
});

// Utility function: throttle
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Utility function: debounce
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
