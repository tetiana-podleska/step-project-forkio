const burgerBtn = document.querySelector('.burger');
const menu = document.querySelector('.menu');
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger--opened');
    menu.classList.toggle('menu--opened');
});
