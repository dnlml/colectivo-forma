const css = require('../styles/main.scss');
const sprite = require.context('../svg/sprite', false, /\.svg$/);
sprite.keys().forEach(sprite);

const WebFont = require('webfontloader');
const Hover = require('./parts/hover');
const TabSwitch = require('./parts/tab-switch');

const DataFetch = require('./services/data-fetch');

class App {
  constructor () {
    this.init();
  }

  init() {
    new Hover();
    new TabSwitch();
    new DataFetch('GET', 'http://www.mocky.io/v2/5ab96fa72c0000810f1864d2');
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
