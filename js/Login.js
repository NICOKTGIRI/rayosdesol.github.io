document.addEventListener("DOMContentLoaded", function() {
    // Obtener el formulario de inicio de sesión
    var loginForm = document.getElementById("loginform");

    // Agregar un evento al formulario cuando se envíe
    loginForm.addEventListener("submit", function(event) {
        // Evitar el envío por defecto del formulario
        event.preventDefault();

        // Obtener los valores de los campos de entrada
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;


        // Simulando un inicio de sesión exitoso para propósitos de ejemplo
        if (email === "fernanda@example.com" && password === "123456") {
            // Redirigir al usuario a Usuario.html después de iniciar sesión
            window.location.href = "../html/inicio.html";
        } else {
            // Mostrar un mensaje de error o realizar otras acciones si el inicio de sesión es incorrecto
            alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
        }
    });
});
