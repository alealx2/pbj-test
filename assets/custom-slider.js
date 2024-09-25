document.addEventListener('DOMContentLoaded', function() {

    setTimeout(function(){
        
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
  }, 1000);
    
});
