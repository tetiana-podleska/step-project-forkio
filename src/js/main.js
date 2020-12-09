const burgerBtn = document.querySelector('.nav-btn');
burgerBtn.addEventListener('click', () => {
    const mobileMenu = document.querySelector('.top-nav--mobile');
    mobileMenu.classList.add('top-nav--opened');
});
const burgerBtnOpened = document.querySelector('.top-nav__wrapper > .nav-btn');
burgerBtnOpened.addEventListener('click', () => {
    const mobileMenu = document.querySelector('.top-nav--mobile');
    mobileMenu.classList.remove('top-nav--opened');
})