document.addEventListener("DOMContentLoaded", () => {
    const selectCurso = document.getElementById("Curso");
    const descripcion = document.getElementById("descripcion");
    const instructor = document.getElementById("instructor");
    const fechaInicio = document.getElementById("fecha-inicio");
    const duracion = document.getElementById("duracion");
  
    selectCurso.addEventListener("change", () => {
      const cursoSeleccionado = selectCurso.value;
      switch (cursoSeleccionado) {
        case "primaria":
          descripcion.textContent = "Descripción: Matemáticas - Contenido Programático";
          instructor.textContent = "Instructor: Julio Jaramillo";
          fechaInicio.textContent = "Fecha de inicio: 01/04/2024";
          duracion.textContent = "Duración del curso: 8 semanas";
          break;
        case "secundaria":
          descripcion.textContent = "Descripción: Historia - Contenido Programático";
          instructor.textContent = "Instructor: Nelson Rivera";
          fechaInicio.textContent = "Fecha de inicio: 15/04/2024";
          duracion.textContent = "Duración del curso: 10 semanas";
          break;
        case "preparatoria":
          descripcion.textContent = "Descripción: Química - Contenido Programático";
          instructor.textContent = "Instructor: Daniela Bermudez";
          fechaInicio.textContent = "Fecha de inicio: 10/04/2024";
          duracion.textContent = "Duración del curso: 12 semanas";
          break;
        case "universidad":
          descripcion.textContent = "Descripción: Informatica - Contenido Programático";
          instructor.textContent = "Instructor: Andrea Moreno";
          fechaInicio.textContent = "Fecha de inicio: 05/04/2024";
          duracion.textContent = "Duración del curso: 14 semanas";
          break;
        case "posgrado":
          descripcion.textContent = "Descripción: Artes - Contenido Programático";
          instructor.textContent = "Diego Villamor";
          fechaInicio.textContent = "Fecha de inicio: 20/04/2024";
          duracion.textContent = "Duración del curso: 6 semanas";
          break;
        default:
          descripcion.textContent = "Descripción del curso: ";
          instructor.textContent = "Instructor: ";
          fechaInicio.textContent = "Fecha de inicio: ";
          duracion.textContent = "Duración del curso: ";
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const registroBtn = document.getElementById('registroEstudianteBtn');

    registroBtn.addEventListener('click', function() {
        alert('Registro exitoso');
    });
});

  