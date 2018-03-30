import Flickity from "flickity";

class Slideshow {
  constructor() {
    this.slideContainer = document.querySelector('.slideshow__list');
    this.option = {
      autoPlay: false,
      wrapAround: true,
      fullscreen: true,
      pageDots: false,
      arrowShape: {
        x0: 10,
        x1: 60, y1: 50,
        x2: 70, y2: 40,
        x3: 30
      }
    };

    this.init();
  }

  init() {
    this.slideshow = new Flickity(this.slideContainer, this.option);
  }
}

export default Slideshow;