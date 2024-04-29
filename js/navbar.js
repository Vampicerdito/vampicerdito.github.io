// JavaScript para detectar el desplazamiento
const main = document.querySelector('.main');
main.addEventListener('scroll', () => {
    const scrollPos = main.scrollTop;
    if (scrollPos > 200) {
        main.classList.add('scroll-active');
    } else {
        main.classList.remove('scroll-active');
    }
});
