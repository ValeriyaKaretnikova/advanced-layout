const toggle = document.querySelector('.hamburger-btn');
toggle.addEventListener('click', () => {
    document.querySelector('.toggle-nav').classList.toggle('show-nav');
});