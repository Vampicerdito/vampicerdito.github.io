const  menu= document.querySelector("#menu");
const miToggle = document.getElementById("miToggle");
miToggle.addEventListener("change", manejarToggle);

// Función que se ejecutará cuando cambie el estado del toggle
function manejarToggle(event) {
    if (event.target.checked) {
        menu.classList.add("visible");
    } else {
        menu.classList.remove("visible");
    }
}

const  navbar= document.querySelector("#navbar");
// Escucha el evento de desplazamiento
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    if (scrollPosition === 0) {
        navbar.classList.remove("active");
    } else {
        navbar.classList.add("active");
    }
});
