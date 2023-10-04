let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    console.log("Clic en el ícono de las tres barras");
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Agregar la clase hover cuando se realiza el hover en una opción de la barra de navegación en modo móvil
const navbarLinks = document.querySelectorAll('.navbar li a');
navbarLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        if (window.innerWidth < 769 && navbar.classList.contains('active')) {
            link.classList.add('hover');
        }
    });

    link.addEventListener('mouseleave', () => {
        if (window.innerWidth < 769) {
            link.classList.remove('hover');
        }
    });
});

// Cerrar la barra de navegación en modo móvil al hacer clic en una opción
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 769) {
            navbar.classList.remove('active');
            menu.classList.remove('bx-x');
        }
    });
});

// Cerrar la barra de navegación en modo móvil al hacer clic en cualquier lugar fuera de la barra
document.addEventListener('click', (event) => {
    if (window.innerWidth < 769 && !event.target.closest('.navbar') && !event.target.closest('#menu-icon')) {
        navbar.classList.remove('active');
        menu.classList.remove('bx-x');
    }
});
