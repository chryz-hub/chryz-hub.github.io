//Navbar toggle
const navToggle = () => {
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.nav-list');

    burger.addEventListener('click', () => {
        navList.classList.toggle('active');
        burger.classList.toggle('toggle');
    });
}

navToggle();