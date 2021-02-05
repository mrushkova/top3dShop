'use strict';

const burger = document.querySelector('.header__burger');
const burgerOpen = document.querySelector('.btn--burger');
const burgerClose = document.querySelector('.btn--close-burger');
const menuMobile = document.querySelector('.header-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', function (e) {
  e.preventDefault();
  burgerOpen.classList.toggle('visually-hidden');
  burgerClose.classList.toggle('visually-hidden');
  menuMobile.classList.toggle('visually-hidden');
  body.classList.toggle('lock');
});
