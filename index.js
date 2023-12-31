document.addEventListener('DOMContentLoaded', function() {
  const enlaces = document.querySelectorAll('.myself__footer__link');

  enlaces.forEach(enlace => {
    enlace.addEventListener('click', function(event) {
      event.preventDefault();
      this.classList.toggle('clicked');
    });
  });
});

function mostrarProyectos(tecnologia) {
  const proyectos = document.querySelectorAll('.project');

  proyectos.forEach((proyecto) => {
    const tieneTecnologia = proyecto.classList.contains(tecnologia);
    const esMostrarTodos = tecnologia === 'all';

    if (esMostrarTodos || tieneTecnologia) {
      proyecto.style.display = 'block';
    } else {
      proyecto.style.display = 'none';
    }
  });
}

function mostrarTodos() {
  mostrarProyectos('all');
}