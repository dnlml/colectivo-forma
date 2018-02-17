'use script';

class TabSwitch {
  constructor () {
    const DEFAULT_LANG = 'en';

    this.button = document.querySelectorAll('.tab-switcher__btnElement');
    this.content = document.querySelector('.tab-switcher__content');
    this.description = document.querySelectorAll('.course-description__text');
    
    this.defaultBtn = document.querySelector(`#${DEFAULT_LANG}-btn`);
    this.defaultTab = document.querySelector(`#${DEFAULT_LANG}-desc`);

    this.init();
  }

  init () {
    this.resetDescriptionVisibility();
    this.setDefaultTab();
    this.setDefaultBtn();
    this.btnClickHandler();
  }

  btnClickHandler() {
    this.button.forEach((btn, index) => {
      btn.addEventListener('click', (evt) => {
        this.resetBtnVisibility();
        this.resetDescriptionVisibility();
        evt.target.classList.add('tab-switcher__btnElement--active');
        this.description[index].classList.remove('tab-switcher__description--hidden');
        this.description[index].classList.add('tab-switcher__description--visible');
      });
    });
  }

  resetDescriptionVisibility() {
    this.description.forEach(el => {
      el.classList.remove('tab-switcher__description--visible');
      el.classList.add('tab-switcher__description--hidden');
    });
  }

  resetBtnVisibility() {
    this.button.forEach(el => el.classList.remove('tab-switcher__btnElement--active'));
  }

  setDefaultTab() {
    this.defaultTab.classList.forEach((cl) => {
      if (cl === 'tab-switcher__description--hidden')
        this.defaultTab.classList.remove('tab-switcher__description--visible')
    });
    this.defaultTab.classList.add('tab-switcher__description--visible');
  }

  setDefaultBtn() {
    this.defaultBtn.classList.add('tab-switcher__btnElement--active');
  }

};

module.exports = TabSwitch;
