const btn = document.querySelector('.header-block__menu-span');
const elem = document.querySelector('.header-block-nav')
const nav = document.querySelector('.header-block-menu')

btn.addEventListener('click', function () {
    btn.classList.toggle('active');
    elem.classList.toggle('active');
    nav.classList.toggle('active');
})