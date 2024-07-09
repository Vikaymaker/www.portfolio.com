// JavaScript for Certificate Slider
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider-inner');
    let isDown = false;
    let startX;
    let scrollLeft;
  
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
  
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
  
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
  
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  
    // Auto-slide functionality
    let slideIndex = 0;
    const slides = document.querySelectorAll('.certificate');
  
    function showSlides() {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = 'block';
      setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
  
    showSlides();
  });
  