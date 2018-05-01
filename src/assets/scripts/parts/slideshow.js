class Slideshow {
  constructor() {
    this.init();
  }

  init() {
    let current = 0;
    const slides = document.querySelectorAll('.slideshow__item');
    const slidesLength = slides.length;
    setInterval(() => {
      for (let i = 0; i < slidesLength; i++) {
        slides[i].style.opacity = 0;
      }
      current = (current != slidesLength - 1) ? current + 1 : 0;
      slides[current].style.opacity = 1;
    }, 7000);
  }
}

export default Slideshow;