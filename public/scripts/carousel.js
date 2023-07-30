const carousel = document.querySelector('.carousel-images')
      length   = carousel.children.length;

carousel.style.width = `${length * 100}%`;

const leftArrow = document.querySelector('.arrow.left');
      rightArrow = document.querySelector('.arrow.right');

let counter = 0;

const moveCarousel = (place) => {
  const amount = place / length * 100;
  carousel.style.transform = `translateX(${-amount}%)`;
};

leftArrow.addEventListener('click', () => {
  counter === 0 ? counter = length - 1 : counter--;
  moveCarousel(counter);
});

rightArrow.addEventListener('click', () => {
  counter === length - 1 ? counter = 0 : counter++;
  moveCarousel(counter);
});
