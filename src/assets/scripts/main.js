const css = require('../styles/main.scss');
const sprite = require.context('../svg/sprite', false, /\.svg$/);
sprite.keys().forEach(sprite);

import WebFont from 'webfontloader';
import Slideshow from './parts/slideshow';
class App {
  constructor () {
    this.init();
  }

  init() {
    new Slideshow();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  WebFont.load({
    custom: {
      families: ['font']
    },
    active: function () {
      new App();
    },
    inactive: function () {
      new App();
    }
  });
});
