document.addEventListener('DOMContentLoaded', function() {

    //Since related products section is not available on init or document afterload
    //We add an observer to check element once in viewport so slider can be activated
    function initializeSlider() {
      const sliderContainer = document.querySelector('.slider-container');
      const slider = document.querySelector('.slider');
      const sliderItems = document.querySelectorAll('.slider-item');
  
      if (sliderItems.length > 0) {
        const itemWidth = sliderItems[0].offsetWidth; 
  
        const nextBtn = document.querySelector('.next-btn');
        const prevBtn = document.querySelector('.prev-btn');
  
        nextBtn.addEventListener('click', function() {
          sliderContainer.scrollLeft += itemWidth * 1.5; 
        });
  
        prevBtn.addEventListener('click', function() {
          sliderContainer.scrollLeft -= itemWidth * 1.5; 
        });
      } else {
        console.error('No slider items found.');
      }
    }
  
    function observeSliderContainerInView() {
      const sliderContainer = document.querySelector('.slider-container');
      if (sliderContainer) {
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              initializeSlider();
              observer.unobserve(entry.target); 
            }
          });
        }, {
          threshold: 0.1 
        });
        observer.observe(sliderContainer);
      }
    }
  
    const mutationObserver = new MutationObserver(function(mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          if (document.querySelector('.slider-container')) {
            observeSliderContainerInView();
            observer.disconnect(); 
          }
        }
      }
    });
  
    mutationObserver.observe(document.body, { childList: true, subtree: true });
  });
  