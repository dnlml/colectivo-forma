const css = require('../styles/main.scss');
const sprite = require.context('../svg/sprite', false, /\.svg$/);
sprite.keys().forEach(sprite);

const WebFont = require('webfontloader');
const Hover = require('./parts/hover');

class App {
  constructor () {
    this.init();
  }

  init() {
    new Hover();
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
