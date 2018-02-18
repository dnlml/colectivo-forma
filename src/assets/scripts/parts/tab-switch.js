'use strict';

class TabSwitch {
  constructor () {
    const DEFAULT_LANG = 'en';

    this.buttons = document.querySelectorAll('.js-tab-switcher__item');
    this.descriptions = document.querySelectorAll('.js-course-description__text');

    this.defaultBtn = document.querySelector(`#js-${DEFAULT_LANG}-btn`);
    this.defaultTab = document.querySelector(`#js-${DEFAULT_LANG}-desc`);

    this.buttonsLength = this.buttons.length;
    this.descriptionsLength = this.descriptions.length;

    this.init();
  }

  init () {
    this.eventManager();
    this.resetDescVisibility();
    this.setDefaultTab();
    this.setDefaultBtn();
  }

  eventManager() {
    for (let i = 0; i < this.buttonsLength; i++) {
      this.buttons[i].addEventListener('click', (evt) => {
        this.resetBtnVisibility();
        this.resetDescVisibility();
        evt.target.classList.add('tab-switcher__item--active');
        this.descriptions[i].classList.remove('tab-switcher__description--hidden');
        this.descriptions[i].classList.add('tab-switcher__description--visible');
      });
    }
  }

  resetDescVisibility() {
    for (let i = 0; i < this.descriptionsLength; i++) {
      this.descriptions[i].classList.remove('tab-switcher__description--visible');
      this.descriptions[i].classList.add('tab-switcher__description--hidden');
    }
  }

  resetBtnVisibility() {
    for (let i = 0; i < this.buttonsLength; i++) {
      this.buttons[i].classList.remove('tab-switcher__item--active');
    }
  }

  setDefaultTab() {
    this.defaultTabLength = this.defaultTab.classList.length;

    for (let i = 0; i < this.defaultTabLength; i++) {
      if (this.defaultTab.classList[i] === 'tab-switcher__description--hidden') {
        this.defaultTab.classList.remove('tab-switcher__description--visible')
      }
    }
    this.defaultTab.classList.add('tab-switcher__description--visible');
  }

  setDefaultBtn() {
    this.defaultBtn.classList.add('tab-switcher__item--active');
  }

};

module.exports = TabSwitch;
