window.addEventListener('DOMContentLoaded', () => {
  /**
   * Shows the navbar while scrolling.
   */
  const showNavbar = () => {
    const navBar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 100) {
        navBar.classList.add('fixed-top');
      } else {
        navBar.classList.remove('fixed-top');
      }
    });
  };
  showNavbar();

  /**
   * Adds interactivity to the nav links while clicking or scrolling.
   */
  const manageNavLinks = () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    // nav links on click
    document.addEventListener('click', (e) => {
      navLinks.forEach((link) => {
        if (e.target == link) {
          e.preventDefault();
          sections.forEach((sec) => {
            if (link.pathname.includes(sec.dataset.section)) {
              var linkPath = link.pathname.slice(1, link.pathname.length);
              if (sec.classList.contains(linkPath)) {
                window.scrollTo(0, sec.offsetTop - 60);
              }
            }
          });
          link.classList.add('active');
          if (link !== e.target) {
            link.classList.remove('active');
          }
        }
      });
    });
    // nav links on scroll
    window.addEventListener('scroll', () => {
      sections.forEach((sec) => {
        if (window.scrollY > sec.offsetTop - 100 && window.scrollY < sec.offsetTop + sec.offsetHeight - 100) {
          navLinks.forEach((link, i) => {
            if (link.pathname.includes(sec.dataset.section)) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    });
  };
  manageNavLinks();

  /**
   * Scrolls the page to top.
   */
  const scrollTop = () => {
    const scrollTopBtn = document.querySelector('.scroll-top');
    window.addEventListener('scroll', () => {
      if (window.scrollY == 0) {
        scrollTopBtn.style.display = 'none';
      }
      if (window.scrollY > 400) {
        scrollTopBtn.style.display = 'block';
        scrollTopBtn.addEventListener('click', () => {
          window.scrollTo(0, 0);
          scrollTopBtn.style.display = 'none';
        });
      }
    });
  };
  scrollTop();

  /**
   * Slides the carousel items.
   */
  const slideCarousel = () => {
    const carouselItems = document.querySelectorAll('.carousel__item');
    const carouselBullets = document.querySelectorAll('.bullet');
    setInterval(() => {
      carouselItems.forEach((item) => {
        item.classList.toggle('carousel--active');
      });
      carouselBullets.forEach((bullet) => {
        bullet.classList.toggle('bullet--active');
      });
    }, 4000);
    carouselBullets.forEach((bullet, i) => {
      bullet.addEventListener('click', () => {
        bullet.classList.add('bullet--active');
        carouselItems[i].classList.add('carousel--active');
        carouselBullets.forEach((b) => {
          if (b !== bullet) {
            b.classList.remove('bullet--active');
          }
        });
        carouselItems.forEach((item) => {
          if (item !== carouselItems[i]) {
            item.classList.remove('carousel--active');
          }
        });
      });
    });
  };
  slideCarousel();

  /**
   * Animates the page using GreenSock library.
   */
  const animatePage = () => {
    // HERO SECTION
    const heroH1 = document.querySelector('.hero__content h1');
    const heroP = document.querySelector('.hero__content p');
    const heroBtn = document.querySelector('.hero__content .btn');
    gsap.from(heroH1, { duration: 2, ease: 'back.out(1.7)', opacity: 0, y: -100 });
    gsap.from(heroP, { duration: 2.5, ease: 'back.out(1.7)', opacity: 0 });
    gsap.from(heroBtn, { duration: 2, ease: 'back.out(1.7)', opacity: 0, y: 100 });
    // SERVICES SECTION
    const serviceItems = document.querySelectorAll('.services__item');
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(serviceItems, { scrollTrigger: { trigger: serviceItems }, duration: 1.5, opacity: 0, y: -100, stagger: 0.5 });
    // PORTFOLIO SECTION
    gsap.from('.portfolio .col', { scrollTrigger: '.portfolio .col', duration: 1, opacity: 0, scale: 0 });
    // VIDEO SECTION
    let videoElements = Array.from(document.querySelector('.video .container').children);
    gsap.from(videoElements, { scrollTrigger: videoElements[0], duration: 1, opacity: 0, scale: 0, stagger: 0.5, y: -100 });
    // COUNTER SECTION
    let counters = document.querySelectorAll('.counter__num');
    let counter = { value: 0 };
    gsap.to(counter, { scrollTrigger: counters[0], value: 1589, onUpdate: () => (counters[0].innerText = Math.round(counter.value)), duration: 1.5 });
    gsap.to(counter, { scrollTrigger: counters[1], value: 699, onUpdate: () => (counters[1].innerText = Math.round(counter.value)), duration: 1.5 });
    gsap.to(counter, { scrollTrigger: counters[2], value: 202, onUpdate: () => (counters[2].innerText = Math.round(counter.value)), duration: 1.5 });
    gsap.to(counter, { scrollTrigger: counters[3], value: 1689, onUpdate: () => (counters[3].innerText = Math.round(counter.value)), duration: 1.5 });
  };
  animatePage();

  /**
   * Displays images & videos using GLightbox library.
   */
  const showMedia = () => {
    const lightbox = GLightbox({});
    const myGallery = GLightbox({
      elements: [
        {
          href: '',
          type: 'image',
          title: 'My Title 1',
        },
        {
          href: '',
          type: 'video',
          source: 'youtube',
          width: 900,
        },
      ],
    });
  };
  showMedia();
});
