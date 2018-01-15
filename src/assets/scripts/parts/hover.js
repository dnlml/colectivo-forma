'use script';

class Hover {
  constructor () {
    this.hoverEl = document.querySelector('.js-hover');
    this.bg = document.querySelector('.js-bg');
    this.container = document.querySelector('.js-container');

    this.init();
  }

  init () {
    this.eventManager();
  }

  eventManager() {
    this.mouseInFn = this.mouseIn.bind(this);
    this.mouseOutFn = this.mouseOut.bind(this);

    this.hoverEl.addEventListener('mouseenter', this.mouseInFn, false);
    this.hoverEl.addEventListener('mouseleave', this.mouseOutFn, false);
    this.hoverEl.addEventListener('click', this.mouseOutFn, false);
  }

  mouseIn () {
    this.bg.classList.add('cta__square--expanded');
    this.container.classList.add('container--inverted');
  }

  mouseOut() {
    this.bg.classList.remove('cta__square--expanded');
    this.container.classList.remove('container--inverted');
  }

};


module.exports = Hover;
