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
    new DataFetch();
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
