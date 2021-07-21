function slider({
  container,
  slide,
  nextArrow,
  prevArrow,
  totalCounter,
  currentCounter,
  wrapper,
  slideNavigation,
  field,
}) {
  //SLIDER
  const slides = document.querySelectorAll(slide),
    slider = document.querySelector(container),
    prev = document.querySelector(prevArrow),
    next = document.querySelector(nextArrow),
    total = document.querySelector(totalCounter),
    current = document.querySelector(currentCounter),
    slidesWrapper = document.querySelector(wrapper),
    slidesField = document.querySelector(field),
    slideNav = document.querySelector(slideNavigation),
    width = window.getComputedStyle(slidesWrapper).width;
  // console.log(width);
  let slideIndex = 1;
  let offset = 0;

  /* SLIDE VAR 2*/
  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
  }

  slidesField.style.width = 100 * slides.length + '%';
  slidesField.style.display = 'flex';
  slidesField.style.transition = '0.5s all';
  slidesWrapper.style.overflow = 'hidden';

  slides.forEach((slide, i) => {
    slide.style.width = width;
  });

  slider.style.position = 'relative';
  const indicators = document.createElement('ol'),
    dots = [];
  indicators.classList.add('carousel-indicators');
  slider.append(indicators);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');
    dot.classList.add('dot');
    dot.setAttribute('data-slide-to', i + 1);
    if (i === 0) {
      dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);

    // dot.style.cssText = ``
  }
  function indexCount() {
    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
    dots.forEach((dot) => {
      dot.style.opacity = '.5';
    });
    dots[slideIndex - 1].style.opacity = 1;
  }

  function toNumWithoutWords(str) {
    return +str.replace(/\D/g, '');
  }

  // console.log(dots);
  next.addEventListener('click', () => {
    // if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
    if (offset == toNumWithoutWords(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += toNumWithoutWords(width);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    indexCount();
  });

  prev.addEventListener('click', () => {
    if (offset == 0) {
      offset = toNumWithoutWords(width) * (slides.length - 1);
    } else {
      offset -= toNumWithoutWords(width);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    indexCount();
  });

  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to');
      console.log(slideTo);
      slideIndex = slideTo;
      offset = toNumWithoutWords(width) * (slideTo - 1);

      slidesField.style.transform = `translateX(-${offset}px)`;
      if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = slideIndex;
      }
      dots.forEach((dot) => {
        dot.style.opacity = '.5';
      });
      dots[slideIndex - 1].style.opacity = 1;
    });
  });
}

// module.exports = slider;
export default slider;
