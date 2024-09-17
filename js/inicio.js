// Obtener todos los enlaces del menú
const links = document.querySelectorAll('.menu a');

// Agregar evento click a cada enlace
links.forEach(link => {
    link.addEventListener('click', (e) => {
        // Remover la clase 'active' de todos los enlaces
        links.forEach(l => l.classList.remove('active'));
        // Agregar la clase 'active' al enlace clickeado
        e.target.classList.add('active');
    });
});
