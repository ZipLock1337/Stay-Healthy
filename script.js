const burgerIcon = document.querySelector('.burger_icon');
const navList = document.querySelector('.nav_list');

burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('active');
    navList.classList.toggle('active');
});