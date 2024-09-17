document.addEventListener("DOMContentLoaded", function() {
    var tipoRegistro = document.getElementById("tipoRegistro");
    var registroEstudianteForm = document.getElementById("registroEstudianteForm");
    var registroProfesorForm = document.getElementById("registroProfesorForm");
  
    tipoRegistro.addEventListener("change", function() {
      if (tipoRegistro.value === "estudiante") {
        registroEstudianteForm.style.display = "block";
        registroProfesorForm.style.display = "none";
      } else if (tipoRegistro.value === "profesor") {
        registroEstudianteForm.style.display = "none";
        registroProfesorForm.style.display = "block";
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    var registroEstudianteForm = document.getElementById("registroEstudianteForm");
    var registroProfesorForm = document.getElementById("registroProfesorForm");

    registroEstudianteForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto

        if (validarRegistroEstudiante()) {
            // Aquí podrías enviar los datos del estudiante al servidor si es necesario
            window.location.href = 'login.html'; // Reemplaza 'login.html' con la URL correcta
        }
    });

    registroProfesorForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto

        if (validarRegistroProfesor()) {
            // Aquí podrías enviar los datos del profesor al servidor si es necesario
            window.location.href = 'login.html'; // Reemplaza 'login.html' con la URL correcta
        }
    });

    function validarRegistroEstudiante() {
        // Aquí podrías realizar validaciones específicas para el registro de estudiantes
        var nombreEstudiante = document.getElementById("nombreEstudiante").value.trim();
        var apellidoEstudiante = document.getElementById("apellidoEstudiante").value.trim();
        var emailEstudiante = document.getElementById("emailEstudiante").value.trim();
        var passwordEstudiante = document.getElementById("passwordEstudiante").value.trim();
        var edadEstudiante = document.getElementById("edadEstudiante").value.trim();
        var nivelEducativoEstudiante = document.getElementById("nivelEducativoEstudiante").value;
        var institucionEstudiante = document.getElementById("institucionEstudiante").value.trim();

        if (nombreEstudiante === "" || apellidoEstudiante === "" || emailEstudiante === "" || passwordEstudiante === "" || edadEstudiante === "" || nivelEducativoEstudiante === "" || institucionEstudiante === "") {
            alert("Por favor, completa todos los campos.");
            return false;
        }

        return true;
    }

    function validarRegistroProfesor() {
        // Aquí podrías realizar validaciones específicas para el registro de profesores
        var nombreProfesor = document.getElementById("nombreProfesor").value.trim();
        var apellidoProfesor = document.getElementById("apellidoProfesor").value.trim();
        var emailProfesor = document.getElementById("emailProfesor").value.trim();
        var passwordProfesor = document.getElementById("passwordProfesor").value.trim();
        var especializacion = document.getElementById("especializacion").value.trim();
        var experiencia = document.getElementById("experiencia").value.trim();
        var certificaciones = document.getElementById("certificaciones").value.trim();

        if (nombreProfesor === "" || apellidoProfesor === "" || emailProfesor === "" || passwordProfesor === "" || especializacion === "" || experiencia === "" || certificaciones === "") {
            alert("Por favor, completa todos los campos.");
            return false;
        }

        return true;
    }
});

  