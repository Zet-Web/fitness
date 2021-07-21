import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import { openModal } from './modules/modal';
window.addEventListener('DOMContentLoaded', function () {
  /*   const tabs = require('./modules/tabs'),
    modal = require('./modules/modal'),
    timer = require('./modules/timer'),
    cards = require('./modules/cards'),
    calc = require('./modules/calc'),
    forms = require('./modules/forms'),
    slider = require('./modules/slider'); */
  const modalTimerId = setTimeout(
    () => openModal('.modal', modalTimerId),
    300000
  );
  // Изменил значение, чтобы не отвлекало
  tabs(
    '.tabheader__item',
    '.tabcontent',
    '.tabheader__items',
    'tabheader__item_active'
  );
  modal('[data-modal]', '.modal', modalTimerId);
  timer('.timer', '2021-11-11');
  cards();
  calc();
  forms('form', modalTimerId);
  slider({
    container: '.offer__slider',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner',
    slide: '.offer__slide',
    slideNavigation: '.slide-btns',
  });
  /*   axios.get('http://localhost:3000/menu').then((data) => {
    data.data.forEach(({ img, altimg, title, descr, price }) => {
      new MenuCard(
        img,
        altimg,
        title,
        descr,
        price,
        '.menu .container'
      ).render();
    });
  }); */

  /* getResource('http://localhost:3000/menu').then((data) => {
    createCard(data);
  });

  function createCard(data) {
    data.forEach(({ img, altimg, title, descr, price }) => {
      const element = document.createElement('div');
      element.classList.add('menu__item');
      element.innerHTML = `
      <img src=${img} alt=${altimg}>
      <h3 class="menu__item-subtitle">${title}</h3>
      <div class="menu__item-descr">${descr}</div>
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${price}</span> грн/день</div>
      </div>
      `;
      document.querySelector('.menu .container').append(element);
    });
  } */

  /* 
  new MenuCard(
    'img/tabs/vegy.jpg',
    'vegy',
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu .container'
  ).render();

  new MenuCard(
    'img/tabs/post.jpg',
    'post',
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    14,
    '.menu .container'
  ).render();

  new MenuCard(
    'img/tabs/elite.jpg',
    'elite',
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    21,
    '.menu .container'
  ).render(); */

  /* 
  fetch('http://localhost:3000/menu')
    .then((data) => data.json())
    .then((res) => console.log(res)); */

  /*
    MYSLIDE VERSION
    showSlides(slideIndex);

    function showSlides(n) {
      current.textContent = slideIndex + 1;
      slides.forEach((item) => {
        item.style.display = 'none';
      });
      slides[0].style.display = 'block';

      next.addEventListener('click', () => {
        slideIndex++;
        if (slideIndex > slides.length - 1) {
          slideIndex = 0;
        }
        slides.forEach((item) => {
          item.style.display = 'none';
        });
        slides[slideIndex].style.display = 'block';
        current.textContent = slideIndex + 1;
        console.log(slideIndex);
      });

      prev.addEventListener('click', () => {
        // debugger;
        if (slideIndex < 1) {
          slides[slideIndex].style.display = 'none';
          slideIndex = slides.length - 1;
          slides[slideIndex].style.display = 'block';
        } else {
          slides[slideIndex].style.display = 'none';
          slideIndex--;
          slides[slideIndex].style.display = 'block';
        }


        current.textContent = slideIndex + 1;
        console.log(slideIndex); 

      });
  }*/

  /* 
  showSlides(slideIndex);
  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
  } else {
    total.textContent = slides.length;
  }
  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    slides.forEach((item) => {
      item.style.display = 'none';
    });
    slides[slideIndex - 1].style.display = 'block';

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  }

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }
  prev.addEventListener('click', () => {
    plusSlides(-1);
  });
  next.addEventListener('click', () => {
    plusSlides(1);
  }); */
});
