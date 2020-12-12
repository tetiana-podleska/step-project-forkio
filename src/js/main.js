const burgerBtn = document.querySelector('.burger');
const menu = document.querySelector('.menu-list');
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger--opened');
    console.log(menu);
});