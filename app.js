const burger = document.querySelector('.burger');
const headeNav = document.querySelector('.header-nav');

burger.addEventListener("click", () => {
    burger.classList.toggle('active')
    headeNav.classList.toggle('active')
})